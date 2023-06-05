const express = require('express');
const bodyparser = require('body-parser')


const app = express();
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});

app.post('/bmicalculator',(req,res)=>{
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let bmi = weight/(height*height)
    res.send("your bmi is " + bmi)
})

app.listen(1000)