class App {
    constructor(){
        this.$usersCards = document.querySelector('.photographer_section')
        this.usersApi = new userApi('data/photographers.json')

    }
    async main() {
        this.users = await this.usersApi.getUsers();
        this.filteredUsers = this.users;
        console.log(this.filteredUsers)
        this.displayPhotographers()   

        const searchInput = document.getElementById('search-photographer');

        searchInput.addEventListener('keyup', this.searchInputKeyup.bind(this))   
    }
    displayPhotographers(){
        this.$usersCards.innerHTML = "";
        this.filteredUsers.forEach(user => {
            const photographer = new photographerFactory(user)
            this.$usersCards.appendChild(photographer.getPhotographerCardDOM())        
        })
    }
    searchInputKeyup(e){
        const searchString = e.target.value.toLowerCase();
        this.filteredUsers = this.users.filter((photographer) => {
            return photographer.name.toLowerCase().includes(searchString);
        })
        this.displayPhotographers();
    }
}


const app = new App()
app.main()


