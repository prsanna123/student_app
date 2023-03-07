const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/mydb",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
const mongoURI="mongodb://0.0.0.0:27017/mydb"
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

connectDB()
// mongoose.connect('mongodb://127.0.0.1:27017/mydb'). catch (error => console.log(error));

// app.get("/fetchall",(req,res)=>{
//     // monmodel.find((err,val)=>{
//     //     if(err){
//     //         console.log(err);
//     //     }
//     //     else{
//     //         res.json(val)
//     //     }
//     // })
//     let data=myModel.find({}).then((res) => {
//         //if succeded do this block of code
//         console.log(res)
       
//         // res.json(val);
//       }).catch((err) => {
//         //catch error
//         console.log(err);
//       });
//       if(data){
//         res.contentType('json');
//         res.send(data);
//       }
// })
// app.listen(5000,()=>{
//     console.log("on port 3000")
// })
// app.use(bodyParser.json()) 