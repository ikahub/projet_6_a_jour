function photographerFactory(data) {
    const { id, name, portrait, price, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getPhotographerCardDOM() {
        const article = document.createElement( 'article' );
        const link = `photographer.html?id=${id}`;
        article.addEventListener('click', () => window.location.href = link)
        const img = document.createElement( 'img');
        img.classList.add('photographer-img');
        const h1 = document.createElement( 'h1' );
        h1.classList.add('price')
        const p = document.createElement( 'p' );
        p.classList.add('tagline')
        const pun = document.createElement( 'p' );
        pun.classList.add('city-country')
        const pdeux = document.createElement( 'p' );
        p.textContent = tagline;
        h1.textContent = price +'€/jour';
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        pun.textContent = city +','+' '+ country;
        pdeux.textContent = country;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pun);
        article.appendChild(p);
        article.appendChild(h1);
        return (article);
    }
    return { name, picture, price, getPhotographerCardDOM }
}