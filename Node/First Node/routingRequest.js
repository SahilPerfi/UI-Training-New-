const  http = require('http');

const server= http.createServer((req, res)=> {
    console.log(req);
    const url= req.url;
    if(url === "/"){
        res.write(' <html>')
        res.write('<head><title>Routing request</title></head>')
        res.write(' <body><h1>Routing</h1><form action="/message" method="POST"><input type="text" name="message"></input><button>Submit</button></form></body>')
        res.write(' </html>')
        return res.end()
    }
        res.write(' <html>')
        res.write('<head><title>Sending Response</title></head>')
        res.write(' <body><h1>Else hreke</h1></body>')
        res.write(' </html>')
})
server.listen(3000)