const express = require("express");
const app = express();
const mysql=require('mysql');
const bodyParser =require('body-parser')
const cors = require('cors');
// const db = mysql.createPool({
//     host: 'localhost',
//     user:'root',
//     password:'',
//     database: 'nodem',
//     port: '4306'

// })
const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'root',
    database: 'cnu_secure',
    port: '3306'

})
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get',(req,res)=>{
    const sqlSelect= "SELECT * FROM student;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
app.get('/api/get/report',(req,res)=>{
    const sqlSelect= "SELECT * FROM assistancerequest;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
app.get('/api/get/report/resolve',(req,res)=>{
    const sqlSelect= "SELECT * FROM resolved_assistancerequest;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
app.post('/api/delete/moveOpenToResolve',(req,res)=>{
    console.log(' DELETED: '+req.body.aRID)
    let post_delete = req.body.aRID
    let sql_delete =`DELETE FROM assistancerequest WHERE aRID = ${post_delete};`
    db.query(sql_delete, post_delete, (err, rows) => {
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log('SQL  DELETED: '+sql_delete)
        
    })
})
app.post('/api/get/report/moveOpenToResolve',(req,res)=>{

    console.log('report transfered: '+req.body.aRID)
    let post = {aRID: req.body.aRID, dateTime:req.body.dateTime, location: req.body.location}
    // let sql_delete ='DELETE FROM assistancerequest WHERE aRID = 4;'
    let sql = 'INSERT INTO resolved_assistancerequest SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log(' added: '+req.body.time)
    })
 
})

app.post('/api/insert/test', (req, res)=>{
    let post = {firstname:req.body.firstName,lastName:req.body.lastName, cnuID:975119}
    let sql = 'INSERT INTO student SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log(' added: '+req.body.firstName+ " , "+req.body.lastName)
    })
})
app.post('/api/insert/reportCrime', (req, res)=>{
    console.log('report added: '+req.body.reportID)
    let post = {dateTime:req.body.dateTime ,location: req.body.location}
    let sql = 'INSERT INTO assistancerequest SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log(' added: '+req.body.time)
    })
})

app.post('/api/insert',(req,res)=>{
    let post = {cnuID: 30,firstName: 'Charlie Dog', lastName: 'PUPPY'}
    let sql = 'INSERT INTO student SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('employee added')
    })
    


})
app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
// //insert employee
app.get('/api/insertt', (req, res)=>{
    console.log('employee added: '+req.body.firstName)
    let post = {firstname:"Scot",lastName:"McElfresh", cnuID:1235689}
    let sql = 'INSERT INTO student SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log(' added: '+req.body.firstName)
    })
})




app.listen(3001, ()=>{
    console.log("DB on port 3001 is running ")
})
