 const express = require('express')
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

//--->Socket Configure
const {Server} = require('socket.io');
const io = new Server(expressServer);   //made socket server with respect to expressServer

// -----> Create Namespace connection
let buyNsp = io.of("/buy");
buyNsp.on('connection', function(socket){
    buyNsp.emit("MyBroatcast", "I am from Buy Namespace!")
})

let sellNsp = io.of("/sell");
sellNsp.on('connection', function(socket){
    sellNsp.emit("MyBroatcast", "I am from Sell Namespace!")
})



// io.on("connection", function(socket){
//     io.sockets.emit('MyBroatcast', "First code with Broatcast in Socket.io!")
// })


app.get('/', function(req, res){ 
    res.sendFile(__dirname+"/index.html")
})

expressServer.listen(7000, function(){
    console.log("Server run @7000");
})