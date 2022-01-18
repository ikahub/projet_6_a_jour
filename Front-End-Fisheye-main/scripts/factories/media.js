function photoFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    console.log(picture)

    function getPhotoDetailsCardDOM() {
        const link = `photographer.html?id=${id}`;
        const articleDetail = document.createElement( 'article' );

        const divPrice = document.createElement('div')

        const fixedPrice = document.createElement('p')
        
        const h1 = document.createElement( 'h1' );
        const pLink = document.createElement('p');
        const p = document.createElement( 'p' );
        const pun = document.createElement( 'p' );
        const pdeux = document.createElement( 'p' );
        
        h1.classList.add('photograph_name')
        p.classList.add('tagline')
        pun.classList.add('city-country')

        divPrice.id = 'totalLikes'
        
        fixedPrice.id = 'fixedPrice'

        fixedPrice.innerHTML = price

        p.innerHTML = tagline;
        pLink.innerHTML = link;
        h1.innerText = name;
        pun.innerText = city +','+' '+ country;
        pdeux.innerText = country;
        fixedPrice.innerHTML = price

        articleDetail.appendChild(h1);
        
        articleDetail.appendChild(pun);
        articleDetail.appendChild(p);
        articleDetail.appendChild(divPrice)
        articleDetail.appendChild(fixedPrice)

        //console.log(articlePhotographer)

        return (articleDetail);
    }

    return { id, name, picture, getPhotoDetailsCardDOM}
}

function pPfactory(medias){
    const {id, portrait, name} = medias;

    const picture = `assets/photographers/${portrait}`;

    function displayPortrait(){
        const articlePp = document.createElement( 'article' );
        const img = document.createElement('img');
        img.classList.add('photographer-img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name)
        articlePp.appendChild(img);

        return (articlePp);
    }
    return { id, displayPortrait}
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





   

