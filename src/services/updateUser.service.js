import users from "../dataBase/dataBase";


export default function updateUserService(newClient, id) {
    const client = users.findIndex(user => user.id === id)

    const date = new Date()

    const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

    newClient.updatedOn = today


    if (newClient.isAdm !== undefined) {
        throw new Error("Not allowed to change admin field.")
    }

    if (newClient.email) {
        const emailExists = users.find((user) => user.email === newClient.email)
        if (emailExists) {
            throw new Error("E-mail already exists.")

        }
    }

    users[client] = { ...users[client], ...newClient }

    const response = {
        id: users[client].id,
        email: users[client].email,
        name: users[client].name,
        createdOn: users[client].createdOn,
        updatedOn: users[client].updatedOn,
        isAdm: users[client].isAdm
    }

    return response

}



