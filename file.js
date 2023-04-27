const express = require('express');
const app = express();
var fs= require('fs');

const port = 8081;

app.get('/file', (req,res) => {
  
    fs.readFile('demo.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
           return res.end();
        });
   
})
  



app.listen(port , ()=>{
    console.log(`Server is listening on port ${port}`);
})