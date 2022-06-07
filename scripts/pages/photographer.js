//Mettre le code JavaScript lié à la page photographer.html
class Card {
    constructor(medias) {
        this._id = medias.id;
        this._photographerId = medias.photographerId;
        this._title = medias.title;
        this._image = medias.image;
        this._likes = medias.likes;
        this._date = medias.date;
        this._price = medias.price;
        this._video = medias.video;
    }

    get id() {
        return this._id
    }
    
    get photographerId() {
        return this._photographerId
    }
    get title(){
        return this._title
    }

    get image() {
        return this._image
    }

    get likes() {
        return this._likes
    }

    get price() {
        return this._price
    }

    get image() {
        return `assets/medias/${this._photographerId}/${this._portrait}`
    }

    get video() {
        return `assets/medias/videos/${this._video} `
    }
}

/**
 * Fetch des photographes et des médias
 */
    class Api {
        constructor(url) {
            this._url = url
        }
    
        async getPhotographers() {
            return fetch(this._url)
                .then(res => res.json())
                .then(res => res.photographers)
                .catch(err => console.log('an error occurs', err))
        }

        async getMedias() {
            return fetch(this._url)
                .then(res => res.json())
                .then(res => res.media)
                .catch(err => console.log('an error occurs', err))
        }
    }
    

    class  PhotographerApi  extends Api {
        constructor(url) {
            super(url)
        }

        async getPhotographersApi(){
            return await this.getPhotographers()
        }

        async getMediasApi() {
            return await this.getMedias()
        }
    }


    class App {
        constructor() {
            this.$moviesWrapper = document.querySelector('.photograph-header')
            // this.photographerApi = new PhotographerApi('data/photographers.json')
            this.photographerApi = new PhotographerApi('data/media.json')
        }
    
        async main() {
            const cards = await this.photographerApi.getMediasApi()
    
            cards
            .map(profil => new Card(profil))
            .forEach(profil => {
                console.log(profil)
                const Template = new PhotographerCard(profil)
                this.$moviesWrapper.appendChild(Template.createPhotographerCard()) 
                      
            })    
        }
    }
    
    const app = new App()
    app.main()


/**
 * Création des cartes des photographes
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
                <div class=info>
                    <h2>${this._profil.name}</h2>
                    <h3>${this._profil.city}, ${this._profil.country}</h3>
                    <p>${this._profil.tagline}</p>
                
                </div>
                <a href= "photographer.html?${this._profil.id}">
                    <img src="${this._profil.portrait}" alt="Photo de ${this._profil.name}">
                <a/>
                
                </article>`;

            
            $wrapper.innerHTML = photographerCard
            return $wrapper
        }
    }

/**
 * Carte des medias
 */
    class MediaCard {
        constructor(profil) {
            this._profil = profil
        }
    
        createMediaCard() {
            const $wrapper = document.createElement('div')
            $wrapper.classList.add('movie-card-wrapper')
    
            const mediaCard =  
                `
                <article>
                    <a href= "photographer.html?${this._profil.photographerId}">
                    ${video? `<video controls="controls" src="${this._profil.video}"></video>` 
                    :
                        `<img src="${this._profil.picture}" alt="Photo de ${this._profil.title}" id=${this._profil.id}>` }
 
                    </a>
                    <div class=title-likes>
                        <h2>${this._profil.title}</h2>
                        <div class=heart>
                            <span>${this._profil.likes}</span>
                            <i class="fas fa-heart heart-fas"></i>
                        </div>
                    </div>
                </article>`

            
            $wrapper.innerHTML = mediaCard
            return $wrapper
        }
    }


    