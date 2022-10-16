const express = require("express");
const app = express();
const mysql=require('mysql');
const bodyParser =require('body-parser')
const cors = require('cors');
const { urlencoded } = require("express");

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'nodem',
    port: '4306'

})
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get',(req,res)=>{
    const sqlSelect= "SELECT * FROM student;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
app.get('/api/get/test',(req,res)=>{
    const sqlSelect= "SELECT * FROM simpletester;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
// //register
// app.post('/register',(req,res)=> {
//     const password = req.body.password;
//     const username = req.body.username;
    
//     db.query("INSERT INTO nodem (username, password) VALUES(?,?)",[username, password],
//     (err, result)=>{
//         console.log(err);
//         })
// })

app.post('/api/insert',(req,res)=>{
    let post = {cnuID: 30,firstName: 'Charlie Dog', lastName: 'PUPPY'}
    let sql = 'INSERT INTO student SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('employee added')
    })
    
//     const firstName = "req.body.password";
//     const lastName = req.body.username;
//     const cnuID = req.body.cnuID;
//     const phone = req.body.password;
//     const address = req.body.username;
//     const email = req.body.password;
//     const EmConName = req.body.username;
//     const EmConPhone = req.body.password;
//     const EmConRelation = req.body.username;
//     const password = req.body.password;
//     console.log("LASTNAME "+ cnuID);


//    const sqlinsert ="INSERT INTO student(cnuID, firstName, lastName, phone, address, email, EmConName, EmConPhone, EmComRelation, password) VALUES ('009875119', 'Kayla', 'kjjJohnson', '5714818626', '4243', 'madison.johnson.19@cnu.edu', 'dsfkjbds', 'kvjbkj', 'sfjgndf', 'doggy');";
//    db.query(sqlinsert,(err, result)=>{
//     // console.log("POSTED "+ result.cnuID);
//     res.send(result)
//    }) 
//    const sqlInsert= "INSERT INTO student (cnuID , firstName,lastName,phone,address,email,EmConName,EmConPhone,EmConRelation,password) VALUES (?,?,?,?,?,?,?,?,?,?)"
//     db.query(sqlInsert,[1243 , "firstName","lastName","phone","address","email","EmConName","EmConPhone","EmConRelation","password"],(err,result)=>{

//     // db.query(sqlInsert,[cnuID , firstName,lastName,phone,address,email,EmConName,EmConPhone,EmConRelation,password],(err,result)=>{
//         console.log("POSTED "+ result);
//         res.send("POSTED "+ firstName+" : "+lastName);
//     });


})
// //insert employee
app.get('/api/insertt', (req, res)=>{
    console.log('employee added: '+req.body.firstName)
    let post = {firstname:req.body.firstName}
    let sql = 'INSERT INTO simpletester SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('employee added')
        console.log('employee added: '+req.body.firstName)
    })
})




app.listen(3001, ()=>{
    console.log("DB on port 3001 is running ")
})


// const express = require('express')
// const mysql = require('mysql')
// const cors= require("cors");


// //create connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password:'',
//     database: 'nodem',
//     port: '4306'
// })

// db.connect(err =>{
//     if (err){
//         throw err
//     }
//     console.log("mysql connected")
// })
// const app =express();
// app.use(cors());


// //crate database
// app.get('/createDB', (req, res)=>{
//     let sql= "CREATE DATABASE nodem";
//     db.query(sql, err =>{
//         if (err){
//             throw err
//         }
//         res.send('Database Created')
//     });
// });

// app.get('/createemployee',(req,res)=>{
//     let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(225), designation VARCHAR(225), PRIMARY KEY(id))'
//     db.query(sql , err =>{
//         if (err){
//             throw err;
//         }
//         res.send("Employee table created ");
//     })
// })

// //insert employee
// app.get('/employee1', (req, res)=>{
//     let post = {name: 'jake smith', designation: 'CEO'}
//     let sql = 'INSERT INTO employee SET ?'
//     let query = db.query(sql, post, err =>{
//         if (err){
//             throw err
//         }
//         res.send('employee added')
//     })
// })
// //insert employee
// app.get('/employee2', (req, res)=>{
//     let post = {name: 'Madison Johnson', designation: 'Partner'}
//     let sql = 'INSERT INTO employee SET ?'
//     let query = db.query(sql, post, err =>{
//         if (err){
//             throw err
//         }
//         res.send('employee added')
//     })
// })

// //select emplyee
// app.get('/getemployee', (req, res)=>{
//     let sql = 'SELECT * FROM employee'
//     let query = db. query(sql, (err, results)=>{
//         if (err){
//             throw err
//         }
//         console.log(results)
//         res.send('Employee details fetched ')
//     })
// })


// //update employede
// app.get('/updateemployee/:id',(req, res)=>{
//     let newName='Adrianna Bryan'
//     let sql =  `UPDATE employee SET name =  '${newName}' WHERE id= ${req.params.id}`
//     let query = db.query(sql, err =>{
//         if (err){
//             throw err
//         }
//         res.send("emplyee updated")
//     })
// })

// //delete employee
// app.get('/deleteemployee/:id', (req,res)=>{
//     let sql=`DELETE FROM employee WHERE id=${req.params.id}`
//     let query= db.query(sql, err =>{
//         if (err){
//             throw err
//         }
//         res.send('Employee deleted ')
//     })
// })

// //register
// app.post('/register',(req,res)=> {
//     const password = req.body.password;
//     const username = req.body.username;
    
//     db.query("INSERT INTO nodem (username, password) VALUES(?,?)",[username, password],
//     (err, result)=>{
//         console.log(err);
//         })
// })

// app.listen('3001', ()=>{
//     console.log('Server Started on port 3000')
// })