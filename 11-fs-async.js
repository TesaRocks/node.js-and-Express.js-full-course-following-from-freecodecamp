const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result
    console.log('done with tito');
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        console.log('done with tesa');
        writeFile('./content/result-async.txt',`Here is the result tessina: ${first}, ${second}`
        ,(err, result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this tast');
        })
    })
})
console.log('starting next task');