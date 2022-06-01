import users from "../../dataBase/dataBase"

export default function createUserMiddleware(req, res, next) {
    const { email, password, name, isAdm } = req.body

    if (!email || !password || !name || isAdm === undefined) {
        return res.status(400).json({ message: "Missing data." })
    }

    const userExists = users.find(user => user.email === email)

    if (userExists) {
        return res.status(400).json({ message: "E-mail already exists." })
    }

    next()
}