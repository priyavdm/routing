const express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123',
    database : 'routing'
  });

var cors =require('cors') 
   
app=express()
app.use(express.json())
app.use(cors())
connection.connect();

app.get('/getemp',(req,res)=>{
    connection.query('Select * from emp_details', function(error,results){
       if(error){
           console.log(error);
       }
       console.log('The solution is:',results);
       res.json(results);
    })
   })

   app.get('/getempdet/:id',(req,res)=>{
    connection.query('Select * from emp_details where id=?',[req.params.id], function(error,results){
       if(error){
           console.log(error);
       }
       console.log('The solution is:',results);
       res.json(results);
    })
   })

   app.get('/getcomp',(req,res)=>{
    connection.query('Select * from comp_details', function(error,results){
       if(error){
           console.log(error);
       }
       console.log('The solution is:',results);
       res.json(results);
    })
   })

   app.get('/getcompdet/:id',(req,res)=>{
    connection.query('Select * from comp_details where id=?',[req.params.id] , function(error,results){
       if(error){
           console.log(error);
       }
       console.log('The solution is:',results);
       res.json(results);
    })
   })

   app.listen(4000,()=>{
    console.log('listening on port 4000');
    })
   