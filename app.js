const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// IMPORT ROUTES

// USERS
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

// ROLES
const rolesRoute = require('./routes/roles');
app.use('/roles', rolesRoute);

// TASKS
const taskRoute = require('./routes/task');
app.use('/task', taskRoute);


app.get('/', (req, res) => {
    res.send('Servidor Funcionando')
})
app.listen(3000);


// CONEXION CON BASE DE DATOS
mongoose.connect(
    process.env.MONGODB_URL,
    {useNewUrlParser: true },
    ()=> console.log('Conexion existosa!')
);