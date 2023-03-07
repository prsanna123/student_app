const connectToMongo=require('./main')
const express=require('express')
connectToMongo;
const app=express()
var cors=require('cors')
app.use(cors())
const port=5000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/api/auth',require('./routes/auth'))
app.listen(port,()=>{
    console.log("class app listening from 5000")
})