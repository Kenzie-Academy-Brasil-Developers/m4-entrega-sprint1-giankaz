import updateUserService from "../services/updateUser.service"

export default async function updateUserController(req, res) {
        const {uuid} = req.params
   
        const newClient = req.body



        try {
            const updatedClient = await updateUserService(newClient, uuid)

            return res.status(200).json(updatedClient)

        } catch (error) {

            return res.status(401).json({ message: error.message })

        }
    


}
