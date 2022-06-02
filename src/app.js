import express from 'express'
import routes from './routes/users.routes'
import loginRoutes from './routes/login.routes'

const app = express()
app.use(express.json())

app.use('/users', routes)
app.use('/login', loginRoutes)

app.listen(3001, () => {
    console.log('Open');
})


export default app