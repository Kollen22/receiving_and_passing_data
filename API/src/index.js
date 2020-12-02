const cors = require('cors');
const express = require('express');
const app = express();

const http = require('http');
const socketIo = require('socket.io');

const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/name', { useNewUrlParser: true, useUnifiedTopology: true });


const server = http.Server(app);
const io = socketIo(server);

app.use((req, res, next) =>{
    req.io = io;
    return next();
})


app.use(cors());
app.use(express.json());
app.use(router);


app.listen(3000);