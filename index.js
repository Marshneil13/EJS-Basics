const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));
// line 6 to access the file from anywhere
app.get('/',(req,res)=>{
    // res.send('HI');
    res.render('home')//simply home will do in place of home.ejs as we have set the view engine to ejs
    // also the directory 'views/' need not be specified
})
app.get('/rand', (req,res)=>{
    const num = Math.floor(Math.random()*10)+1;
    res.render('random', {val: num});
    // or simply have {num} and pass num in the EJS tag
})
app.get('/cats',(req,res)=>{
    const cats = ['Janet', 'Millie', 'Coral', 'Pearl', 'Limcee', 'Steph', 'Romeo', 'Rose']
    res.render('cats',{cats});
}) 
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.render('subreddit',{subreddit});
})
app.listen('3000',()=>{
    console.log('LISTENING ON PORT 3000');
})