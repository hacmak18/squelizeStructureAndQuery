const express = require('express');
require("./helper/global");
const sequelizeMiddleware = require('./middlewares/sequelize');


const app = express();

const port = process.env.port || 5000;

sequelizeMiddleware();
app.get('/',async(req,res)=>{
    const users = await global.Models.Admin.findAll();
    res.send(users);
});

app.listen(port,()=>{
    console.log(`Express Server is running at ${port}`);
});


