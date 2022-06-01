import createUserService from "../services/createUser.service";

export default async function createUserController (req, res) {

    const { email, password, name, isAdm } = req.body

    const user = await createUserService(email, password, name, isAdm)

    return res.status(201).json(user)

}
