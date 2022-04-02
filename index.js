const { Console } = require('console');
const express = require('express');
const app = express();
const port = 3000;
   

app.get("/", (request, response) => {
console.log(request)
response.send("root route")
});

app.get("/hello", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/somedata", (req, res) => {
    res.send("{'key' : 'value'}");
  });

app.listen(PORT, () =>{
    Console.log("You are listening to the smooth sounds of port")
});
// console.log(`You are listening to the smooth sounds of port ${PORT}...`)
