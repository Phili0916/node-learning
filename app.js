const express = require('express')

const app = express()

let ejs = require('ejs');

//register view engine
app.set('view engine', 'ejs')

//Listen for requests
app.listen(3000)

app.get('/', (req, res) => {
    const films = [
        {title: 'A New Hope', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
        {title: 'The Empire Strikes Back', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
        {title: 'The Return of the Jedi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
    ];
    res.render('index', {title: 'Home', films});
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});

})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'})
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404 page'});
})