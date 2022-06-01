import updateUserService from "../services/updateUser.service"

export default function updateUserController(req, res) {
        const {id} = req.params
        const newClient = req.body

        try {
            const updatedClient = updateUserService(newClient, id)

            return res.status(200).json(updatedClient)

        } catch (error) {

            return res.status(401).json({ message: error.message })

        }
    


}
