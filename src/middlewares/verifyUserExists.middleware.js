import users from "../dataBase/dataBase"

export default function verifyUserExistsMiddleware(req, res, next) {
    const {uuid} = req.params

    const client = users.find((user) => user.uuid === uuid)

    if (!client) {
        return res.status(404).json({message: "User not Found."})
    }

 

    next()
}
