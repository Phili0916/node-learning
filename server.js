const http = require('http');
const fs =require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    //set header content type
    res.setHeader('Content-Type', 'text/html')

    res.write('<p>Hello Philip</p>')
    res.write('<p>You like Node?</p>')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
})