function photoFactory(data) {
    const { id, name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    console.log(picture)

    function getPhotoDetailsCardDOM() {
        const link = `photographer.html?id=${id}`;
        const articleDetail = document.createElement( 'article' );
        
        
        const h1 = document.createElement( 'h1' );
        const pLink = document.createElement('p');
        const p = document.createElement( 'p' );
        const pun = document.createElement( 'p' );
        const pdeux = document.createElement( 'p' );
        
        h1.classList.add('photograph_name')
        p.classList.add('tagline')
        pun.classList.add('city-country')

        

        p.innerHTML = tagline;
        pLink.innerHTML = link;
        h1.innerText = name;
        pun.innerText = city +','+' '+ country;
        pdeux.innerText = country;

        articleDetail.appendChild(h1);
        
        articleDetail.appendChild(pun);
        articleDetail.appendChild(p);

        //console.log(articlePhotographer)

        return (articleDetail);
    }

    return { id, name, picture, getPhotoDetailsCardDOM}
}

function pPfactory(medias){
    const {id, portrait} = medias;

    const picture = `assets/photographers/${portrait}`;

    function displayPortrait(){
        const articlePp = document.createElement( 'article' );
        const img = document.createElement('img');
        img.classList.add('photographer-img');
        img.setAttribute("src", picture);
        articlePp.appendChild(img);

        return (articlePp);
    }
    return { id, displayPortrait}
}

function mediaFactory(medias) {
    const { date, id, photographerId, image, video, likes, title } = medias;


    const imgMedia = `assets/images/${image}`;
    const videoMedia = `assets/videos/${video}`;
    
    //console.log(videoMedia)
    //console.log(imgMedia)

    function getMediaCardDOM(){
        const articleMedia = document.createElement('article');
        const divTitleLikes = document.createElement('div')
        
        const img = document.createElement('img');
        const videos = document.createElement('video');
        const source = document.createElement('source');
        const pun = document.createElement('button');
        const pdeux = document.createElement('p');
        const closeSetup = document.getElementById('close_onclick')
        //const divHeart = document.createElement('div')
        const ptrois = document.createElement('p')

        //divHeart.id = 'iconDiv'

        articleMedia.id = 'article_media'

        divTitleLikes.id = 'divTitleLikes'

        videos.classList.add('media_img')

        img.classList.add('media_img');
        pun.classList.add('likes');
        pdeux.classList.add('title');

        pdeux.innerHTML = title;
        
        //divHeart.innerHTML = '<i class="fas fa-heart"></i>';
        pun.innerHTML = likes //+ " " + '<i class="fas fa-heart"></i>' ;

        if(image){
            img.setAttribute("src", imgMedia);
            img.id = id
            articleMedia.appendChild(img);
        }
        else{
            source.setAttribute("src", videoMedia);
            videos.appendChild(source)
            videos.id = id
            articleMedia.appendChild(videos)
        }
        articleMedia.appendChild(divTitleLikes)
        divTitleLikes.appendChild(pdeux);
        divTitleLikes.appendChild(pun);
        divTitleLikes.appendChild(ptrois)
        
        /////// Increment Likes ///////
        
        /////// REMOVE LIGHTBOX ///////

        closeSetup.addEventListener('click', () => {
            lightbox.classList.remove('active')
        })

        /////// RETURN ///////

        return (articleMedia);
    }
    return { date, id, photographerId, getMediaCardDOM }
}





   

