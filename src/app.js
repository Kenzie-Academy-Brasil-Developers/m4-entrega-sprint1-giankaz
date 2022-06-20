const routes = require('./routes/users.routes')
const loginRoutes = require('./routes/login.routes')
const express = require('express')

const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/entrega_crud', { useNewUrlParser: true })

const connection = mongoose.connection

connection.once('open', _ => console.log('Database connected'))
connection.on('error', error => console.log(error))

const app = express()
app.use(express.json())

app.use('/users', routes)
app.use('/login', loginRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log('Open');
})


