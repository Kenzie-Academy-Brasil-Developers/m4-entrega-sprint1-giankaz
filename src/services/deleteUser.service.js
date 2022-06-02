import users from "../dataBase/dataBase";


export default function deleteUserService(id) {
    const client = users.findIndex((user) => user.id === id)

    users.splice(client, 1)

    return "User deleted with sucess."
}
