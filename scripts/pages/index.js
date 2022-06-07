class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }
}


class PhotographerApi extends Api {
        
    constructor(url) {
        super(url)
    }

    async getPhotographer() {
        return await this.get()
    }

}


class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.photographer_section')
        this.photographerApi = new PhotographerApi('data/photographers.json')
    }

    async main() {
        const cards = await this.photographerApi.getPhotographer()

        cards.forEach(profil => {
            const Template = new PhotographerCard(profil)
            this.$moviesWrapper.appendChild(Template.createPhotographerCard()) 
                  
        })    
    }
}
   
const app = new App();
app.main();


/**
 * Création de la carte des photographes
 */
class PhotographerCard {
    constructor(profil) {
        this._profil = profil
    }

    createPhotographerCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('movie-card-wrapper')

        const photographerCard = `
            <article>
                <a href= "photographer.html?${this._profil.id}">
                    <img src="assets/photographers/${this._profil.portrait}" alt="${this._profil.name}">
                </a>
                <div class=info>
                    <h2>${this._profil.name}</h2>   
                    <h3>${this._profil.city}, ${this._profil.country}</h3>
                    <p>${this._profil.tagline}</p>
                    <span>${this._profil.price}€/jour</span>
                </div>
            </article>`;

            $wrapper.innerHTML += photographerCard
            return $wrapper
            
    }
}