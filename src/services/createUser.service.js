import { v4 as uuidv4 } from 'uuid'
import users from '../dataBase/dataBase'
import * as bcrypt from "bcryptjs";

export default async function createUserService(email, password, name, isAdm) {

    const hashPassword = await bcrypt.hash(password, 10)

    const date = new Date()

    const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

    const newUser = {
        email,
        hashPassword,
        name,
        isAdm,
        createdOn: today,
        updatedOn: today,
        uuid: uuidv4()
    }

    const userToSend = {
        email,
        name,
        isAdm,
        createdOn: today,
        updatedOn: today,
        uuid: newUser.uuid
    }

    users.push(newUser)

    return userToSend
}
