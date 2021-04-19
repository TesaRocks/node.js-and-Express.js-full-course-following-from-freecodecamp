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


// const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async()=>{
//     try{
//        // await readFile('./content/first.txt', 'utf8')
//         //await readFile('./content/second.txt', 'utf8')
//         await writeFile('./content/result-mind-grenade', `This is asweome: ${await readFile('./content/first.txt', 'utf8')} ${await readFile('./content/second.txt', 'utf8')}`,{flag:"a"})
//         //console.log(first, sec);
//     }catch(error){
//         console.log(error.message);
//     }
// }

// start()




// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         })


//     })
// }
// getText('./content/first.txt').then(result=>console.log(result)).catch(err =>console.log(err))