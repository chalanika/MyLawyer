const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const Lawyer = require('./models/Lawyer');
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/MyLawyer',{ useNewUrlParser: true })
    .then(()=>console.log("connect successfully"))
    .catch((err)=>console.error(err));

app.put('/:id/rates' ,async (req,res)=>{
    console.log(req.body);
    const rate = {
        rate:req.body.rate,
        feedback:req.body.feedback
    };
    try{
        console.log(req.params.id);
        const lawyer = await Lawyer.findById(req.params.id);
        console.log(lawyer);
        lawyer.rates.push(rate);
        const saved = await lawyer.save();
        res.json(saved);

    }catch(error){
        res.json({message:error});
    }  
});



app.listen(3000, ()=>console.log("server start"));
