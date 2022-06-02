import jwt from 'jsonwebtoken'
import users from '../dataBase/dataBase'
import * as bcrypt from 'bcryptjs'

export default function loginUserService(email, password) {
    const client = users.find((user) => user.email === email)

    if (!client) {
       throw new Error("User not found.")
    }

    const token = jwt.sign({ id: client.id }, 'SECRET_KEY', { expiresIn: "24h" })
   



    const passwordCheck = bcrypt.compareSync(password, client.hashPassword)

    if (!passwordCheck) {
       throw new Error("Wrong email/password")
    }

    return token
}
