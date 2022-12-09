const dotenv = require('dotenv');
const mongoose = require ('mongoose');
const express = require('express');
const app = express();

dotenv.config({path :"./config.env"})

require('./conn');

app.use(express.json());

app.use(require('./route'))

const PORT = process.env.PORT;




app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
