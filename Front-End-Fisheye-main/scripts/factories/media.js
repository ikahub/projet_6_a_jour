function photoFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    console.log(picture)

    function getPhotoDetailsCardDOM() {
        const link = `photographer.html?id=${id}`;

        const photoDetail = document.querySelector('.photographer_detail')
        
        const articleDetail = document.createElement( 'article' );
        const photographerDetail = document.createElement('div')
        const btnForm = document.createElement('button')
        
        const h1 = document.createElement( 'h1' );
       
        const p = document.createElement( 'p' );
        const pun = document.createElement( 'p' );

        const img = document.createElement('img');
        
        
        img.setAttribute("src", picture);
        img.setAttribute("alt", name)
        
        btnForm.classList.add('contact_btn')
        img.classList.add('photographer-img');
        h1.classList.add('photograph_name')
        p.classList.add('tagline')
        pun.classList.add('city-country')

        btnForm.setAttribute("onclick", "displayModal()")

        btnForm.innerText = "Contactez-moi"
        p.innerHTML = tagline;
        h1.innerText = name;
        pun.innerText = city +','+' '+ country;

        
        photographerDetail.appendChild(h1);
        photographerDetail.appendChild(pun);
        photographerDetail.appendChild(p);
        articleDetail.appendChild(photographerDetail)
        articleDetail.appendChild(btnForm)
        articleDetail.appendChild(img);


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
        const pun = document.createElement('p');
        const pdeux = document.createElement('p');

        articleMedia.id = 'article_media'
        divTitleLikes.id = 'divTitleLikes'
        articleMedia.classList.add('article-media')

        videos.classList.add('media_img')

        img.classList.add('media_img');
        pun.classList.add('likes');
        pdeux.classList.add('title');

        pdeux.innerHTML = title;
        pun.setAttribute("data-media-id", id)
        pun.innerHTML = likes + " " + '<i class="far fa-heart"></i>' ;

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
        divTitleLikes.appendChild(pdeux);
        divTitleLikes.appendChild(pun);

        /////// RETURN ///////

        return (articleMedia);
    }
    return { date, id, photographerId, getMediaCardDOM }
}





   

