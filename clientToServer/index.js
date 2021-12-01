 const express = require('express')
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

//--->Socket Configure
const {Server} = require('socket.io');
const io = new Server(expressServer);   //made socket server with respect to expressServer

//--->User Connection and Disconnected Status
io.on('connection', function(socket){
    console.log("New User Connected!");

    socket.on('message', function(msg){
        console.log(msg);
    })


})

app.get('/', function(req, res){ 
    res.sendFile(__dirname+"/index.html")
})

expressServer.listen(3000, function(){
    console.log("Server run @3000");
})