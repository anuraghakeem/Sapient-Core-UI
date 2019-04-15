const exp = require('express');
const app=exp();
const fs=require('fs');
const path=require('path');
const bodyParser = require('body-parser');
const rp = require('request-promise');
app.use(exp.static('./public'));
app.use(bodyParser.urlencoded({
    extended: true
  })); 
app.get('/',(req,res)=>{
    res.sendFile('read.html',{
        root:path.join(__dirname,'./')
    });
    
});
app.get('/getData',(req,res)=>{
    // fs.readFile('./output.txt',(err,data)=> {
    //     if(err) {
    //         res.end(err);
    //     } else {
    //         res.end(data);
    //     }
    // });
    let src = fs.createReadStream('./output.txt');
    src.pipe(res);
    
})
app.listen(4000);

