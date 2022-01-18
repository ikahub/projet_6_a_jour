class userApi {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        //super(url)
        this._url = url
    }

    async getUsers() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }
    async getPhotographer(id){
        const data = await fetch(this._url)
        const json = await data.json()
        const photographer = json.photographers.find(p => p.id === parseInt(id))
        photographer.medias = json.media.filter(m => m.photographerId === parseInt(id))
        //console.log(photographer.medias)
        return photographer
    }
    async getMedias(id){
        const data = await fetch(this._url)
        const json = await data.json()
        const photographer = json.photographers.find(p => p.id === parseInt(id))
        photographer.medias = json.media.filter(m => m.photographerId === parseInt(id))
        //console.log(photographer.medias)
        return photographer.medias
    }
}
