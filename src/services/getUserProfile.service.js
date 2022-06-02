import users from "../dataBase/dataBase";

export default function getUserProfileService(id) {
    const client = users.find((user) => user.id === id)

    return client

}
