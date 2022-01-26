function photographerFactory(data) {
    const { id, name, portrait, price, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getPhotographerCardDOM() {
        const article = document.createElement( 'article' );
        
        const link = `photographer.html?id=${id}`;
        article.addEventListener('click', () => window.location.href = link)

        const portraitImg = document.createElement( 'img');
        const photoPrice = document.createElement( 'h1' );
        const photoTagline = document.createElement( 'p' );
        const cityCountry = document.createElement( 'p' );
        const pdeux = document.createElement( 'p' );
        const photoName = document.createElement( 'h2' );

        portraitImg.setAttribute("src", picture);

        portraitImg.classList.add('photographer-img');
        photoPrice.classList.add('price')
        photoTagline.classList.add('tagline')
        cityCountry.classList.add('city-country')

        photoTagline.textContent = tagline;
        photoPrice.textContent = price +'€/jour';
        photoName.textContent = name;
        cityCountry.textContent = city +','+' '+ country;
        pdeux.textContent = country;

        article.appendChild(portraitImg);
        article.appendChild(photoName);
        article.appendChild(cityCountry);
        article.appendChild(photoTagline);
        article.appendChild(photoPrice);
        return (article);
    }
    return { name, picture, price, getPhotographerCardDOM }
}