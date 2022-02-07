const app = Vue.createApp({
    // template: `
    //     <h1>Hola Mundo</h1>
    //     <p>Aplicación creada desde Js by Mario Morocho</p>
    // `
    // methods: {},
    // watch: {},
    // setup: {}
    data() {
        return {
            message: 'Hola Mundo',
            quote: 'Soy Ironman',
            author: 'Mario Morocho'
        }
    },
    methods: {
        changeQuote( event ) {
            console.log('Hola Mundo', event)
            this.author = 'Nataly Lema'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#vue-container')