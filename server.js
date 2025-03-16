const connectDB = require('./connectionDB');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const producerRoutes = require("./Routes/producerRoute"); 
const eventRoutes = require("./Routes/eventRoute");  
connectDB();
app.use(cors());
app.use(express.json());

// חיבור לנתיבים
app.use("/producers", producerRoutes);
app.use("/events", eventRoutes);

mongoose.connection.once("open",()=>{
    console.log("connction to Mongo");
    app.listen(8000,()=>console.log("server in running on port 8000"));
})