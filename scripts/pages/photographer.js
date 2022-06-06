//Mettre le code JavaScript lié à la page photographer.html
class Card {
    constructor(photographers) {
        this.name = photographers.name;
        this.id = photographers.id;
        this.city = photographers.city;
        this.tagline = photographers.tagline;
        this.price = photographers.price;
        this.portrait = photographers.portrait;
    }

    get name(){
        return this._name
    }

    get id() {
        return this._id
    }

    get city() {
        return this._city
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        return this._price
    }

    get portrait() {
        return `assets/photographers/${this.portrait}`
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
            this.$moviesWrapper = document.querySelector('.movies-wrapper')
            this.moviesApi = new MovieApi('data/photographers.json')
        }
    
        async main() {
            const movies = await this.moviesApi.getMovies()
            // console.log(movies)
            movies.forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(Template.createMovieCard())        
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
    
            const movieCard = `
                <div class="movie-thumbnail center">
                    <img
                        alt="${this._movie.title}"
                        src="/assets/photographers/${this._movie.picture}"
                    />
                </div>
                <h3 class="fs-16 center">${this._movie.title}</h3>
                <p class="fs-14 center">
                    <span>${this._movie.released_in}</span>
                    -
                    <span>${this._movie.duration}</span>
                </p>
            `
            
            $wrapper.innerHTML = movieCard
            return $wrapper
        }
    }



    function photographerFactory(data) {
        const { name, portrait } = data;
    
        const picture = `assets/photographers/${portrait}`;
    
        function getUserCardDOM() {
            const article = document.createElement( 'article' );
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture)
            const h2 = document.createElement( 'h2' );
            h2.textContent = name;
            article.appendChild(img);
            article.appendChild(h2);
            return (article);
        }
        return { name, picture, getUserCardDOM }
    }