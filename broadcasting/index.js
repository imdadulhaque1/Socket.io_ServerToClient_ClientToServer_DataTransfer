 const express = require('express')
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

//--->Socket Configure
const {Server} = require('socket.io');
const io = new Server(expressServer);   //made socket server with respect to expressServer



app.get('/', function(req, res){ 
    res.sendFile(__dirname+"/index.html")
})

expressServer.listen(7000, function(){
    console.log("Server run @7000");
})