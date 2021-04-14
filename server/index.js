import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postrouter from './routes/posts.js'
import userrouter from './routes/users.js'

const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postrouter);
app.use('/user',userrouter)
app.use('/',(req,res) => {
  return res.status(201).json({message:'hello there'})
})
                    //mongodb+srv://ii2c:ii2cENSI@cluster0.trqml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const CONNECTION_URL= 'mongodb+srv://ii2c:ii2cENSI@cluster0.trqml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true , userUnifiedTopology:true})
.then(() => {app.listen(PORT,() => console.log(`server  running on port : ${PORT}`) )

}).catch((error) => console.log(error.message) )
mongoose.set('useFindAndModify',false);
