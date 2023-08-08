const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require("cors");
const {notFound,errorHandler} = require("./middleware/errorMiddleware")
dotenv.config()
require("./Config/db")
const PORT =  process.env.PORT || 8000 ;
const userRoutes = require('./Routes/userRoutes')
const app = express();

// app.use(cors({ origin: true, credentials: true }));
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://api.cloudinary.com/v1_1/dbyzki2cf");
//     res.header(
//       "Access-Control-Allow-Headers"
//     );
//     next();
//   });



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user',userRoutes);
app.use(notFound);
app.use(errorHandler);





app.get('/',(req,res)=>{
    res.send("Api is running");
});







app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}`.yellow.bold);
})


