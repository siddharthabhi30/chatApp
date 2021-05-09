import { Message } from "./Message";


const cors = require('cors');
const express=require('express');
const app= express();
var http = require('http').Server(app);
const PORT=3000||process.env.PORT;
//var io = require('socket.io')(http);

const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:3005",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

//io.set('origins', 'http://localhost:4200');

http.listen(PORT, function(){
    console.log('listening on *:3000');
});

// const io=socketio(http,  {
//     origins: ["http://localhost:4200"]
//   });

//   io.set( 'origins', '*localhost:4200' );

// app.options('*', cors());


io.on('connection',socket=>{
    console.log('nw ws connectiom');
    socket.emit('message','welcome to chatcord');

    socket.on('message',(message:Message)=>{
        console.log("mesasge is commmmmm")
        socket.broadcast.emit('message',message);

    })

})
//io.origins(['http://localhost:4200']);
// app.use(cors());
// app.get("/happy",(req,res)=>{
//     console.log("received")
//     res.send("hello")
// })
export const App=app;
