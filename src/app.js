import express from 'express'
import routes from './routes/users.routes'

const app = express()
app.use(express.json())

app.use('/users', routes)

app.listen(3000, () => {
    console.log('Open');
})