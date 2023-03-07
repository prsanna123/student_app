// // const mongoose = require('mongoose');
// // const mongoURI="mongodb://0.0.0.0:27017/inotebook"
// // mongoose.connect('mongodb://0.0.0.0:27017/mymainprojectdb', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // }, err => err ? console.log(err) : 
// //     console.log('Connected to mainproject database'));
// //use either the above mongoose.connect or below connecttomongo to connect
// // const connectToMongo = ()=> {
// //     mongoose.connect(mongoURI, () => {
// //         console.log("Connected to Mongo Successfully");
// //     })
// // }
// // connectToMongo()

// const mongoose = require('mongoose')
// const mongoURI="mongodb://0.0.0.0:27017/inotebook"
// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(mongoURI) 
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

// connectDB()