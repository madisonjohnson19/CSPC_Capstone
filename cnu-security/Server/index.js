const express = require("express");
const app = express();
const mysql=require('mysql');
const bodyParser =require('body-parser')
const cors = require('cors');
const { renderEditSingleSelectCell } = require("@mui/x-data-grid");
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
app.get('/api/get/CrimeReport',(req,res)=>{
    const sqlSelect= "SELECT * FROM crimereport;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
app.get('/api/get/resolved_campusreport',(req,res)=>{
    const sqlSelect= "SELECT * FROM resolved_campusreport;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
app.get('/api/get/campusReport',(req,res)=>{
    const sqlSelect= "SELECT * FROM campusreport;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})

app.get('/api/get/resolved_crimereport',(req,res)=>{
    const sqlSelect= "SELECT * FROM resolved_crimereport;";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
app.get('/api/get/users/:cnuID',(req,res)=>{
    let cnuID = req.params.cnuID;
    // let cnuID = "12345";
    
    // let sql = `(SELECT * FROM student WHERE CNUID= "${cnuID}");`
    let sql = `SELECT distinct *,count(CNUID)
    FROM student 
    WHERE  CNUID= "${cnuID}";`
    db.query(sql,(err,result)=>{
        res.send(result);
        console.log("GET STUDENT: ",result[0]["firstName"]+ " CNUID: "+sql)
    });
})
app.get('/api/get/reportCrime/crimeReport/:cnuID',(req,res)=>{  
    let cnuID = req.params.cnuID;
    console.log(" REPORT CRIME CNU ID", cnuID )
    let sql = `SELECT *,1
    FROM crimereport
    WHERE cnuID= "${cnuID}";`
    db.query(sql,(err,result)=>{
        res.send(result);
        console.log("REPORT CRIME GET STUDENT: ",result+ " CNUID: ")
    });
})
app.get('/api/get/reportCrime/assistanceRequest/:cnuID',(req,res)=>{  
    let cnuID = req.params.cnuID;
    console.log(" REPORT CNU ID", cnuID )
    let sql = `SELECT *,1 
    FROM assistancerequest
    WHERE cnuID= "${cnuID}";`
    db.query(sql,(err,result)=>{
        res.send(result);
        console.log("REPORT CRIME GET STUDENT: ",result+ " CNUID: ")
    });
})
app.get('/api/get/userReports/campusReports/:cnuID',(req,res)=>{  
    let cnuID = req.params.cnuID;
    console.log(" REPORT CNU ID", cnuID )
    let sql = `SELECT *,1 
    FROM campusreport
    WHERE cnuID= "${cnuID}";`
    db.query(sql,(err,result)=>{
        res.send(result);
        console.log("REPORT CRIME GET STUDENT: ",result+ " CNUID: ")
    });
})
app.get('/api/get/checkStudExists/:cnuID',(req,res)=>{
    let cnuID = req.params.cnuID;
    // let cnuID = "12345";
    let sql = `SELECT EXISTS (SELECT * FROM student WHERE cnuID= "${cnuID}") AS "exists";`
    db.query(sql,(err,result)=>{
        let r =Object.values(JSON.parse(JSON.stringify(result)))
        // let h =r[0][ 'EXISTS (SELECT * FROM student WHERE cnuID= "12345")']
        let string_=(r[0]["exists"])  
        res.send(r[0]);
        
        console.log(r[0] ," : "+ cnuID);
        // console.log("Exists?: ",r[0][ 'EXISTS (SELECT * FROM student WHERE cnuID= "12345")']);
    });
})

app.get('/api/delete/cancelRequest/maxID',(req,res)=>{
    const sqlSelect= "SELECT max(aRID) FROM assistancerequest;";
    db.query(sqlSelect,(err,result)=>{
        let hold =result[0]["max(aRID)"]+""
        res.send(hold);

        console.log("GET LAST REQUEST ID : "+hold)
        
        // console.log("DELETE: "+(result[0]["max(aRID)"]))
        // console.log('LAST ID: '+result[result.length-1].aRID)
    });
})
app.put('/api/update/addCNUID/maxID',(req,res)=>{
    let cnuID = req.body.cnuID;
    let lastID = req.body.lastID;
    console.log("Update to send cnuID: "+cnuID+ "  maxID: "+lastID)
    const sqlSelect= ` UPDATE assistancerequest SET CNUID = ${cnuID} WHERE aRID =${lastID};`;
    db.query(sqlSelect,(err,result)=>{
        // let hold =result[0]["max(aRID)"]+""
        res.send(result);

        console.log("Update : "+result)
        
        // console.log("DELETE: "+(result[0]["max(aRID)"]))
        // console.log('LAST ID: '+result[result.length-1].aRID)
    });
})
app.post('/api/delete/moveOpenToResolve',(req,res)=>{
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
app.post('/api/insert/crimeReport',(req,res)=>{

    console.log('report transfered: '+req.body.crimeID)
    let post = {cnuID: req.body.cnuID, 
        typeOfCrime:req.body.typeOfCrime, 
        location: req.body.location,
        dates: req.body.dates, 
        description:req.body.description, 
        suspectName: req.body.suspectName,
        vehicleDescription: req.body.vehicleDescription}
    // let sql_delete ='DELETE FROM assistancerequest WHERE aRID = 4;'
    let sql = 'INSERT INTO crimereport SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log(' added: '+req.body.time)
    })
 
})
app.post('/api/delete/crime/moveOpenToResolve',(req,res)=>{
    let post_delete = req.body.crimeID
    let sql_delete =`DELETE FROM crimereport WHERE crimeID = ${post_delete};`
    db.query(sql_delete, post_delete, (err, rows) => {
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log('SQL  DELETED: '+sql_delete)
        
    })
})
app.post('/api/delete/campus/moveOpenToResolve',(req,res)=>{
    
    let post_delete = req.body.campusReportID
    console.log("CampusReport Delete campusReportID: ",post_delete)
    let sql_delete =`DELETE FROM campusreport WHERE campusReportID = ${post_delete};`
    db.query(sql_delete, post_delete, (err, rows) => {
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log('SQL  DELETED: '+sql_delete)
        
    })
})
app.post('/api/get/crime/moveOpenToResolve',(req,res)=>{

    console.log('report transfered: '+req.body.crimeID)
    let post = {cnuID: req.body.cnuID, typeOfCrime:req.body.typeOfCrime,
         location:req.body.location, dates: req.body.dates,
        description: req.body.description, suspectName:req.body.suspectName, 
        vehicleDescription: req.body.vehicleDescription}
    // let sql_delete ='DELETE FROM assistancerequest WHERE aRID = 4;'
    let sql = 'INSERT INTO resolved_crimereport SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log(' added: '+req.body.time)
    })
 
})
app.post('/api/get/campus/moveOpenToResolve',(req,res)=>{

    console.log('report transfered: '+req.body.campusReportID)
    let post = {cnuID: req.body.cnuID, location: req.body.location, problem: req.body.problem}
    // let sql_delete ='DELETE FROM assistancerequest WHERE aRID = 4;'
    let sql = 'INSERT INTO resolved_campusreport SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log(' added: '+req.body.time)
    })
 
})

app.post('/api/insert/test', (req, res)=>{
    let post = {firstname:req.body.firstName,
        lastName:req.body.lastName, 
        cnuID:req.body.cnuID,
        email:req.body.email,
        phone:req.body.phone,
        EmConName:req.body.EmConName,
        EmConPhone:req.body.EmConPhone,
        EmConRelation:req.body.EmConRelation}
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
    console.log('report added: '+req.body.aRID)
    let post = {aRID:req.body.lastID,dateTime:req.body.dateTime ,location: req.body.location}
    let sql = 'INSERT INTO assistancerequest SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send('Student added!')
        console.log(' added: '+req.body.time)
    })
})
app.post('/api/insert/campusreport', (req, res)=>{
    console.log('report added: '+req.body.campusReportID)
    let post = {cnuID: req.body.cnuID, location: req.body.location, problem: req.body.problem}
    let sql = 'INSERT INTO campusreport SET ?'
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
