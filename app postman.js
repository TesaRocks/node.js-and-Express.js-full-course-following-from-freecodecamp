const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

app.get('/api/people', (req,res)=>{
    res.status(200).json({success: true, data: people})
})
app.post('/api/people', (req,res)=>{
    const {name} = req.body
    if(!name){
         return res.status(400).json({success:false, msg: 'provide name ddoll'})
    }
    res.status(201).json({success: true, person: name})
})

app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg: 'provide name ddoll'})
   }
   res.status(201).json({success: true, data: [...people, name]})
})


app.post('/login', (req,res)=>{
    const {name} = req.body
    if(name){
       return  res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.put('/api/people/:id', (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((p)=>{
        p.id === Number(id)
    })
    if(!person){
        return res.status(400).json({success:false, msg: `no person withj id ${id}`})
   }
   const newPeople = people.map(p=>{
       if(p.id=== Number(id)){
           p.name = name
       }
       return p
   })
   res.status(200).json({success:true, data:newPeople})

})

app.delete('/api/people/:id', (req,res)=>{
    const person = people.find((p)=>{
        p.id === Number(req.params.id)
    })
    if(!person){
        return res.status(400).json({success:false, msg: `no person withj id ${req.params.id}`})
   }
   const newPeople = people.filter(p=> p.id !== Number(req.params.id))
  return res.status(200).json({success:true, data:newPeople})

})

app.listen(5000,()=>console.log("runnign grosod"))
