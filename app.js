// const http = require('http')
// const server = http.createServer((req,res)=>{
// if(req.url === '/'){
//     res.end('home page pihs')
// } else if(req.url === '/about'){
//     res.end('about page')
// }
// else res.end('error page')
// })
// server.listen(3000, ()=>{
//     console.log('server pijon');
// })

const {readFile} = require('fs')
const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })

    })
}
// getText('./content/first.txt').then(result=>console.log(result)).catch(err =>console.log(err))

const start = async()=>{
    const first = await getText('./content/first.txt')
    console.log(first);
}

start()