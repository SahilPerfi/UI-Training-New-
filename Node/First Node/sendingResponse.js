const  http = require('http');

const server =http.createServer((req,res) =>{
    res.setHeader('Content-Type','text/html')
    res.write(' <html>')
    res.write('<head><title>Sending Response</title></head>')
    res.write(' <body><h1>Hello</h1></body>')
    res.write(' </html>')
})

server.listen(3000);