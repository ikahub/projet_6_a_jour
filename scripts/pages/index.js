class App {
    constructor(){

        //// Récupération de la div et instanciation de l'api de récupération du JSON ////

        this.$usersCards = document.querySelector('.photographer_section')
        this.usersApi = new userApi('data/photographers.json')
    }
    async main() {
        this.users = await this.usersApi.getUsers();
        this.filteredUsers = this.users;
        this.displayPhotographers()   

        const searchInput = document.getElementById('search-photographer');

        searchInput.addEventListener('keyup', this.searchInputKeyup.bind(this))   
    }

    //// Display des photographes en reprennant la méthode de recherche ////

    displayPhotographers(){
        this.$usersCards.innerHTML = "";
        this.filteredUsers.forEach(user => {
            const photographer = new photographerFactory(user)
            this.$usersCards.appendChild(photographer.getPhotographerCardDOM())        
        })
    }

    //// toLowerCase() sur searchString : nullifie upper/lower case sur la value du champ de recherche ////

    searchInputKeyup(e){
        const searchString = e.target.value.toLowerCase();
        this.filteredUsers = this.users.filter((photographer) => {
            return photographer.name.toLowerCase().includes(searchString);
        })
        this.displayPhotographers();
    }
}

//// Instanciation de la class App, appel de app.main() ////

const app = new App()
app.main()


