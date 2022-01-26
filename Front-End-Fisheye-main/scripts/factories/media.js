function photoFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getPhotoDetailsCardDOM() {
        const link = `photographer.html?id=${id}`;

        const photoDetail = document.querySelector('.photographer_detail')
        
        const articleDetail = document.createElement( 'article' );
        const photographerDetail = document.createElement('div')
        const btnForm = document.createElement('button')
        
        const photoName = document.createElement( 'h1' );
       
        const photoTagline = document.createElement( 'p' );
        const cityCountry = document.createElement( 'p' );

        const photoImg = document.createElement('img');
        
        
        photoImg.setAttribute("src", picture);
        photoImg.setAttribute("alt", name)
        
        btnForm.classList.add('contact_btn')
        photoImg.classList.add('photographer-img');
        photoName.classList.add('photograph_name')
        photoTagline.classList.add('tagline')
        cityCountry.classList.add('city-country')

        btnForm.setAttribute("onclick", "displayModal()")

        btnForm.innerText = "Contactez-moi"
        photoTagline.innerHTML = tagline;
        photoName.innerText = name;
        cityCountry.innerText = city +','+' '+ country;

        
        photographerDetail.appendChild(photoName);
        photographerDetail.appendChild(cityCountry);
        photographerDetail.appendChild(photoTagline);
        articleDetail.appendChild(photographerDetail)
        articleDetail.appendChild(btnForm)
        articleDetail.appendChild(photoImg);


        /* 
        Footer price 
        */

        const divPrice = document.createElement('div')
        const fixedPrice = document.createElement('p')
        
        fixedPrice.id = 'fixedPrice'
        divPrice.id = 'totalLikes'

        fixedPrice.innerHTML = price

        photoDetail.appendChild(divPrice)
        photoDetail.appendChild(fixedPrice)

        return (articleDetail);
    }

    return { id, name, picture, getPhotoDetailsCardDOM}
}


function mediaFactory(medias) {
    const { date, id, photographerId, image, video, likes, title } = medias;

    const imgMedia = `assets/images/${image}`;
    const videoMedia = `assets/videos/${video}`;

    function getMediaCardDOM(){
        const articleMedia = document.createElement('article');

        const divTitleLikes = document.createElement('div')
        
        const img = document.createElement('img');
        const videos = document.createElement('video');
        const source = document.createElement('source');
        const mediaLikes = document.createElement('p');
        const mediaTitle = document.createElement('p');

        articleMedia.id = 'article_media'
        divTitleLikes.id = 'divTitleLikes'
        articleMedia.classList.add('article-media')

        videos.classList.add('media_img')

        img.classList.add('media_img');
        mediaLikes.classList.add('likes');
        mediaTitle.classList.add('title');

        mediaTitle.innerHTML = title;
        mediaLikes.setAttribute("data-media-id", id)
        mediaLikes.innerHTML = likes + " " + '<i class="far fa-heart"></i>' ;

        if(image){
            img.setAttribute("src", imgMedia);
            img.setAttribute("alt", title)
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
        divTitleLikes.appendChild(mediaTitle);
        divTitleLikes.appendChild(mediaLikes);

        /////// RETURN ///////

        return (articleMedia);
    }
    return { date, id, photographerId, getMediaCardDOM }
}





   

