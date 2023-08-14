const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const {notFound,errorHandler} = require("./middleware/errorMiddleware")
dotenv.config()
require("./Config/db")
const PORT =  process.env.PORT || 8000 ;
const userRoutes = require('./Routes/userRoutes')
const chatRoutes = require('./Routes/chatRoutes')
const messageRoutes = require('./Routes/messageRoutes')
const app = express();





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);
app.use('/api/message',messageRoutes);
app.use(notFound);
app.use(errorHandler);










app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}`.yellow.bold);
})


