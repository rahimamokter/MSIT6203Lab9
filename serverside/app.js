const express = require('express');
const bodyParser  = require('body-parser');

const app = express();

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// serve incoming post requests to /students
app.post('/students', (req, res, next) => {
    const student = req.body;
    console.log(student.firstName + " " + student.lastName + " " + student.contactEmail);
    //sent an acknowledgment back to caller 
     res.status(201).json('Post successfully');

    });
  
  app.use("/students", (req, res, next) => {
    const students = [
      { "id" : "1", "firstName" : "Mathew" , "lastName" : "Brown" , "contactEmail": "mbrow496@students.kennesaw.edu" }, 
      { "id" : "2", "firstName" : "Mosammat" , "lastName" : "Akter", "contactEmail": "makter1@students.kennesaw.edu"}, 
      { "id" : "3", "firstName" : "Helen" , "lastName" : "Mcdaniel", "contactEmail": "hmcdani6@students.kennesaw.edu" }, 
      { "id" : "4", "firstName" : "Randolph" , "lastName" : "Cassiee" , "contactEmail": "crando14@students.kennesaw.edu"}
   
    ];
  
    res.json(students);
  
  });
  
  module.exports = app;
  