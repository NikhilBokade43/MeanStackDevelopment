const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');

//create rest obj
const app = express();
//app obj used to develop rest api

//enable cors policy
app.use(cors());

//set the json as mime type
app.use(express.json());

//create client object to connect to dabaase
const ashokit = mongodb.MongoClient;

//rest api
app.get("/cloths", (req, res)=>{
    ashokit.connect("mongodb+srv://NikhilBokade:NikhilBokade@mangodb-001.weilt.mongodb.net/meanstack?retryWrites=true&w=majority", 
    (err, connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("meanstack");
            db.collection("apparel").find().toArray((err, array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }

    })
}) 

//assign port 
app.listen(8080, ()=>{
    console.log("listening to port number 8080");
})









