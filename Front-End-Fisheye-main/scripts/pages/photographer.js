//Mettre le code JavaScript lié à la page photographer.html

class PhotographerApp {
    constructor(){
        this.$personnalDetails = document.querySelector('.details')
        this.$personnalPp = document.querySelector('.details')
        this.$personnalGaleries = document.querySelector('.personnal_galerie')

        const params = new URLSearchParams(window.location.search)
        this.id = params.get("id")

        this.usersApi = new userApi('data/photographers.json')
    }
    async main(){
        ////////Récupération du photographe via son ID/////////

        this.photographer = await this.usersApi.getPhotographer(this.id);
        this.medias = await this.usersApi.getMedias(this.id);
        
        ////////display de .photographer_detail et de son contenu///////

        this.$personnalDetails.innerHTML = "";
        const photoDetails = photoFactory(this.photographer)
        this.$personnalDetails.appendChild(photoDetails.getPhotoDetailsCardDOM())

        ////////display de #personnal_galerie et de son contenu/////////

        this.displayPhotographers()
        this.displayFilteredMedias()
        this.getTotalLikesCount()
        /////// PREVIOUS LIGHTBOX ////////

        const previousSetup = document.getElementById('previous')

        const previousHandler = ev => {
            const index = this.medias.indexOf(this.medias.find(m => m.id == this.selectedMedia))
            const newIndex = index == 0 ? this.medias.length -1 : index -1
            const imageLight = document.getElementById('imageLightbox')
            const videoLight = document.getElementById('videoLightbox')

            if(this.medias[newIndex].image){
                const imgSrc = this.medias[newIndex].image
                imageLight.src = `assets/images/${imgSrc}`
                imageLight.style.display = 'block'
                videoLight.style.display = 'none'
            } else{
                const videoSrc = this.medias[newIndex].video
                videoLight.src = `assets/videos/${videoSrc}`
                videoLight.style.display = 'block'
                imageLight.style.display = 'none'
            }
            this.selectedMedia = this.medias[newIndex].id

        }

        ['click', 'keydown'].forEach(evType => {
            const customHandler = evType === 'keydown' ? ev => {
            if (ev.key === 'ArrowLeft') previousHandler()
            } : previousHandler
            if (evType === 'keydown') {
            window.addEventListener(evType, customHandler)
            } else {
            previousSetup.addEventListener(evType, customHandler)
        }
        })

        /////// NEXT LIGHTBOX ////////

        const nextSetup = document.getElementById('next')

        const nextHandler = ev => {
            const index = this.medias.indexOf(this.medias.find(m => m.id == this.selectedMedia))
            const newIndex = index == this.medias.length -1 ? 0 : index +1

            const imageLight = document.getElementById('imageLightbox')
            const videoLight = document.getElementById('videoLightbox')

            this.selectedMedia = this.medias[newIndex].id

            if(this.medias[newIndex].image){
                const imgSrc = this.medias[newIndex].image
                imageLight.src = `assets/images/${imgSrc}`
                imageLight.style.display = 'block'
                videoLight.style.display = 'none'
            } else{
                const videoSrc = this.medias[newIndex].video
                videoLight.src = `assets/videos/${videoSrc}`
                videoLight.style.display = 'block'
                imageLight.style.display = 'none'
            }
        }

        ['click', 'keydown'].forEach(evType => {
            const customHandler = evType === 'keydown' ? ev => {
            if (ev.key === 'ArrowRight') nextHandler()
        } : nextHandler
        if (evType === 'keydown') {
            window.addEventListener(evType, customHandler)
        } else {
            nextSetup.addEventListener(evType, customHandler)
        }
        })
    }
    
    displayPhotographers(sortType){
        switch(sortType){
            case 'popularity' :
                this.medias.sort((a, b) => b.likes - a.likes)
                break
            case 'date' :
                this.medias.sort(function(a, b){
                    if(a.date < b.date) { 
                        return -1; 
                    }
                    if(a.date > b.date) {
                        return 1;
                    }
                    return 0
                })
                break
            case 'title' :
                this.medias.sort(function(a, b){
                    if(a.title < b.title) { 
                        return -1; 
                    }
                    if(a.title > b.title) {
                        return 1;
                    }
                    return 0
                })
                break
            default : 
                this.medias.sort((a, b) => b.likes - a.likes)    
                break
        }
        this.$personnalGaleries.innerHTML = "";
        this.medias.forEach(media => {
            const photoGaleries = mediaFactory(media)
            this.$personnalGaleries.appendChild(photoGaleries.getMediaCardDOM())
        });

        const likes = Array.from(document.getElementsByClassName('likes'))
        likes.forEach(like => {
            like.addEventListener('click', (e) =>{
                const mediaId = like.getAttribute("data-media-id")
                this.medias = this.medias.map(media => {
                    if(media.id == mediaId){
                        if(media.isIncremented){
                            media.likes--
                            media.isIncremented = false;
                        }
                        else{
                            media.likes++
                            media.isIncremented = true
                        }
                        like.innerHTML = `${media.likes} <i class="fa${media.isIncremented?"s":"r"} fa-heart"></i>`
                        this.getTotalLikesCount()
                    }
                    return media
                })
            })
        })

        const mediasArray = Array.from(document.getElementsByClassName('media_img'))
        mediasArray.forEach(media => {
            media.addEventListener('click', () => {
                const lightbox = document.getElementById('lightbox')
                const videoLight = document.getElementById('videoLightbox')
                const imageLight = document.getElementById('imageLightbox')

                lightbox.classList.add('active')
                imageLight.classList.add('light_img')


                if(this.medias.find(m => m.id == media.id).image){
                    const imgSrc = this.medias.find(m => m.id == media.id).image
                    imageLight.src = `assets/images/${imgSrc}`
                    imageLight.style.display = 'block'
                    videoLight.style.display = 'none'
                }else{
                    const videoSrc = this.medias.find(m => m.id == media.id).video
                    videoLight.src = `assets/videos/${videoSrc}`
                    videoLight.style.display = 'block'
                    imageLight.style.display = 'none'
                }

                this.selectedMedia = media.id

                lightbox.appendChild(imageLight)

            })
        })  
    }
    
    ////// TOTAL LIKES COUNT //////

    getTotalLikesCount(){
        const total = this.medias.reduce((a, b) => a+= b.likes, 0) + '<i class="fas fa-heart"></i>'
        const totalLikes = document.getElementById('totalLikes') 
        const innerFixedPrice = document.getElementById('fixedPrice').innerHTML
        totalLikes.innerHTML = total + " " + innerFixedPrice + "€ / jour" 
    }

    ////// Display filtered Medias //////

    displayFilteredMedias(){
        const onDate = document.getElementById('filter')
        onDate.addEventListener('change', (e) => {
            return this.displayPhotographers(e.target.value)
        })
    }
}

const closeSetup = document.getElementById('close_onclick')

const handler = ev => {
	lightbox.classList.remove('active')
}

['click', 'keydown'].forEach(evType => {
    const customHandler = evType === 'keydown' ? ev => {
      if (ev.key === 'Escape') handler()
  } : handler
  if (evType === 'keydown') {
    window.addEventListener(evType, customHandler)
} else {
    closeSetup.addEventListener(evType, customHandler)
}
})

const photographerApp = new PhotographerApp()
photographerApp.main()

