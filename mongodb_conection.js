const { MongoClient } = require("mongodb");
const fs = require("fs");
const { text } = require("express");
const uri = 'mongodb://0.0.0.0:27017/';
const databaseName = "roxo";
let log =""
MongoClient.connect(uri, (error, client) => {
  if (error) {
    console.log(error)
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  const db=client.db(databaseName)

  db.collection("RoxoTodos").find().toArray().then((doc)=>{
    console.log("Todos : ")
    console.log(log=JSON.stringify(doc))
fs.appendFileSync("./json.log",log +"\n")
    
  },(err)=>{console.log("you have error in fetch")})

  db.collection("RoxoTodos").count().then((count)=>{
    console.log("Count : ")
    console.log(log=JSON.stringify(count))

    
  },(err)=>{console.log("you have error in count fetch")})
  
//   db.collection("RoxoTodos").insertOne({
//     text:"something",
//     completed:false,
//   },(err,res)=>{
//     if(err){
//     return console.log("you have error ",err)
// }
// console.log(JSON.stringify(res.ops,undefined,1))
// })
// db.collection("Users").insertOne({

//   name : "sina",
//   age:30,
//   location:"shz"

//   },(err,res)=>{
//     if(err){
//     return console.log("you have error ",err)
// }
// console.log(JSON.stringify(res.ops,undefined,3))
// console.log(res.ops[0]._id.getTimestamp())
// })

  client.close()
});
