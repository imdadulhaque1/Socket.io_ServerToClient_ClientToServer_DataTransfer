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

    //--->User Disconnection Status
    socket.on('disconnect', function(){
        console.log("User disconnected!")
    })

    //--->Data Send Server to Client (Data through ----> )
    // setTimeout(function(){
    //     socket.send("Data sending flow status from server to client(Server --> Client)!")
    // }, 10000)

    // ---> Callback functions working server to client(Continuously getting data from server)
    setInterval(function(){
        let d=new Date();
        let t=d.getTime();
        // socket.send(t); 
        socket.emit('MyEvent', t)
    },1000)

})

app.get('/', function(req, res){ 
    res.sendFile(__dirname+"/index.html")
})

expressServer.listen(3000, function(){
    console.log("Server run @3000");
})