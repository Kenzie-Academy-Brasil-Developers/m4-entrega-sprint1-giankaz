import deleteUserService from "../services/deleteUser.service"

export default function deleteUserController(req, res) {
    const {id} = req.params

    const deletedUser = deleteUserService(id)

    return res.status(200).json({message: deletedUser})
}
