var express = require('express');
var app = express();
var mongodb=require("mongodb");
var cors = require("cors");
var router= express.Router();
var bodyParser= require('body-parser')

router.route('/addproducts').post((req,res)=>{
    // var products=[{id:1,title:"Test Product!"}];
    // res.json(products);
    //code to get data from mongodb!
    //connect to mongodb
    //use MongoClient -> pkg mongodb
    //pass the collection as json
    let url ="mongodb://127.0.0.1:27017";
    let MongoClient= mongodb.MongoClient;
    MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
        if(err){
            console.log(err);
        }else{
            let collection=db.db("SapientDB").collection("productList");
            //Insert into Productlist;
            collection.insertOne(req.body).then((err,result)=>{
                if(!err){
                    console.log("result:"+result);
                }
            });
        }
    });
});

router.route('/products').get((req,res)=>{
    // var products=[{id:1,title:"Test Product!"}];
    // res.json(products);
    //code to get data from mongodb!
    //connect to mongodb
    //use MongoClient -> pkg mongodb
    //pass the collection as json
    let url ="mongodb://127.0.0.1:27017";
    let MongoClient= mongodb.MongoClient;
    MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
        if(err){
            console.log(err);
        }else{
            let collection=db.db("SapientDB").collection("productList");
            //Select * from Productlist;
            collection.find({}).toArray((err,result)=>{
                if(result.length){
                    res.json(result);
                }
            })
        }
    });
});
app.use(bodyParser.json());
app.use(cors()); //enabling cors for entire application!
app.use('/',router);
app.get('/',(req,res)=>{
    res.send("Use /products");
});
app.use((req,res)=>{
    res.send("Incorrect url");
});


app.listen(5000,()=>{
    console.log('Server running at port 5000!')
})