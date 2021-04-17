// const http = require('http')
// const server = http.createServer((req, res)=>{

// })

// server.listen(80, ()=>{
//     console.log('Server is listening on port 5000');
// })

const {readFile} = require('fs')
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        console.log("japi");
        return
    }
    console.log(result)
    console.log('done wit tito');

})
console.log('starting next task');