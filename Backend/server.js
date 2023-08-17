const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
dotenv.config()
require("./Config/db");
const PORT = process.env.PORT || 8000;
const userRoutes = require('./Routes/userRoutes')
const chatRoutes = require('./Routes/chatRoutes')
const messageRoutes = require('./Routes/messageRoutes')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);
app.use(notFound);
app.use(errorHandler);


const server = app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`.yellow.bold);
})

const io = require('socket.io')(server, {
    pingTimeout: 60000,   //This means socket connection will wait for 60seconds before it shuts the connection as connection will waste the bandwith, suppose after last message user didn't send the message then after one minute connection will be closed
    cors: {
        origin: "http://127.0.0.1:5173"
    }
});

io.on("connection", (socket) => {
    console.log('connected to socket.io');
    socket.on('setup', (userData) => {   //It will take the userId and connect it to the socket and will create the room for this user
        socket.join(userData._id);
        console.log(userData._id);
        socket.emit('connected');

    });

    socket.on('join chat', (room) => {  //when another user will join it will be connected to the room and get joint
        socket.join(room);
        console.log("User Joined Room: " + room);
    });

    socket.on('typing', (room) => socket.in(room).emit("typing"));
    socket.on('stop typing', (room) => socket.in(room).emit('stop typing'));


    socket.on('new message', (newMessageReceived) => {
        let chat = newMessageReceived.chat;

        if (!chat.users) {
            return console.log('chat.users not defined');
        }

        chat.users.forEach(user => {          //if you are chatting in a group and you want to send the message to everyone except yourself
            if (user._id == newMessageReceived.sender._id) return;

            socket.in(user._id).emit("message received", newMessageReceived); //in means inside that users room, emit/send messagae
        })
    });
    socket.off("setup",()=>{
        console.log("USER DISCONNECTED!");
        socket.leave(userData._id);
    })
})


