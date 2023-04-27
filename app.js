const express = require('express');
const app = express();

const port = 8080

app.get('/', (req,res)=>{
    res.send('Hello World!');
})

app.get('/user', function(req,res){
   var fruit = req.query.fruit
 
  console.log("Fruit :", fruit);
   
})

app.get('/details' , function(req,res) {
 let employee_details = ["Sudhakar", 1200, "Software Engineer"];

let getdetails = ([name_of_an_employee, employee_id, employee_designation]) => {
    console.log(`Employee's name: ${name_of_an_employee}, Employee's id: ${employee_id}, Employee's designation: ${employee_designation}`
    );

  };
  getdetails(employee_details);
})
    
    


app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})