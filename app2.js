const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log(req.method);
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>home paja</h1>')
        res.end()
    } else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about</h1>')
        res.end()
    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>page not foud</h1>')
        res.end()
    }

})

server.listen(3000)