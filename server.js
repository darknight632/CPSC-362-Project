const mysql = require('mysql');

const con = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b7282e7db1ca80",
    password: "b48f6bbf" 
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.query('SELECT * FROM users', (err, results)=>{
        if(err) throw err;
        console.log(results);
    })
})