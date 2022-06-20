import deleteUserService from "../services/deleteUser.service"

export default async function deleteUserController(req, res) {
    try {
        const { uuid } = req.params

        const deletedUser = await deleteUserService(uuid)

        return res.status(200).json({ message: deletedUser })

    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}
