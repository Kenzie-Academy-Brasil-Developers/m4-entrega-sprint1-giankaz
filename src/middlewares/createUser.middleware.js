const Users = require('../schemas/db.schema')

export default async function createUserMiddleware(req, res, next) {
    const { email, password, name, isAdm } = req.body

    if (!email || !password || !name || isAdm === undefined) {
        return res.status(400).json({ message: "Missing data." })
    }

    const userExists = await Users.findOne({email: email})

    if (userExists) {
        return res.status(400).json({ message: "E-mail already registered" })
    }

    next()
}