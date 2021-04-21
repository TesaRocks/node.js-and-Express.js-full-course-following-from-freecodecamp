const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res)=>{
    res.send('<h1>home</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
   const newP = products.map((p)=>{
       const {id,name,image} = p
       return {id,name,image}
    //    const id = p.id
    //    const name = p.name
    //    const image = p.image

    //    return {id : id,name: name,image: image}

   })
    res.json(newP)
})
app.get('/api/products/:productID', (req,res)=>{
    const {productID} = req.params
    const singleP= products.find((p)=> p.id === Number(productID))
    if(!singleP){
        return res.status(404).send('product does not exist')
    }
  return res.json(singleP)
 })

 app.get('/api/v1/query', (req,res)=>{
    const {search, limit} = req.query
    let sortedP = [...products]
    if(search){
sortedP = sortedP.filter(p=>{
    return p.name.startsWith(search)
})
    }
    if(limit){
        sortedP = sortedP.slice(0,Number(limit))
    }
    if(sortedP.length < 1){
       // res.status(200).send('no products available')
       return  res.status(200).json({success:true, data: []})
    }
    res.status(200).json(sortedP)

 })
 app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
     res.send("japi al cielo")
 })

app.listen(3000, ()=>{
    console.log('jap in act');
})





















































// const express = require('express')
// const path = require('path')

// const app = express()
// //setup static and middleware
// app.use(express.static('./public'))
// // app.get('/', (req,res)=>{
// // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// // })

// app.all('*', (req,res)=>{
// res.status(404).send('Not found ass')
// })

// app.listen(3000, ()=>{console.log("piji in action");})



// const express = require('express')
// const app = express()

// app.get('/', (req,res)=>{
//     res.status(200).send('Home page')
// })

// app.get('/about', (req,res)=>{
//     res.status(200).send('ab paja')
// })

// app.all('*', (req, res)=>{
//     res.status(404).send('<h1>not found dickhead</h1>')
// })

// app.listen(3000, ()=>{
//     console.log('server listen on 3000');
// })
