const express = require('express');
const app = express;

const path = require('path');

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.length('*', (req,res) =>{
        req.sendFule(path.resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(part, (err) =>{
    if (err) return console.log(err);
    console.log('Server running on port: ', port);
})