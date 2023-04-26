const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const playerRouter = require("./router/playerRouter");
const teamRouter = require("./router/teamRouter");
const tournamrnt = require("./router/tournamentRouter");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://taniya:taniya123@cluster0.jky8e.mongodb.net/?retryWrites=true&w=majority");

app.use("/player",playerRouter);
app.use("/team",teamRouter);
// app.use("/tournament",tournamrnt);



app.listen(3000,()=>{
    console.log("Server is running or port");
});
