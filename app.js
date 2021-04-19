const http = require('http')

const server = http.createServer()

server.on('request', (req,res)=>{
    res.end('Welcomes')
})

server.listen(4000)