const express = require('express')
const mysql = require('mysql')


//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'nodem',
    port: '4306'
})

db.connect(err =>{
    if (err){
        throw err
    }
    console.log("mysql connected")
})
const app =express()

//crate database
app.get('/createDB', (req, res)=>{
    let sql= "CREATE DATABASE nodem";
    db.query(sql, err =>{
        if (err){
            throw err
        }
        res.send('Database Created')
    });
});

app.get('/createemployee',(req,res)=>{
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(225), designation VARCHAR(225), PRIMARY KEY(id))'
    db.query(sql , err =>{
        if (err){
            throw err;
        }
        res.send("Employee table created ");
    })
})

//insert employee
app.get('/employee1', (req, res)=>{
    let post = {name: 'jake smith', designation: 'CEO'}
    let sql = 'INSERT INTO employee SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('employee added')
    })
})

//select emplyee
app.get('/getemployee', (req, res)=>{
    let sql = 'SELECT * FROM employee'
    let query = db. query(sql, (err, results)=>{
        if (err){
            throw err
        }
        console.log(results)
        res.send('Employee details fetched ')
    })
})


//update employede
app.get('/updateemployee/:id',(req, res)=>{
    let newName='Adrianna Johnson'
    let sql =  `UPDATE employee SET name =  '${newName}' WHERE id= ${req.params.id}`
    let query = db.query(sql, err =>{
        if (err){
            throw err
        }
        res.send("emplyee updated")
    })
})

//delete employee
app.get('/deleteemployee/:id', (req,res)=>{
    let sql=`DELETE FROM employee WHERE id=${req.params.id}`
    let query= db.query(sql, err =>{
        if (err){
            throw err
        }
        res.send('Employee deleted ')
    })
})

app.listen('3000', ()=>{
    console.log('Server Started on port 3000')
})