import listUserService from "../services/listUser.service";


export default function listUserController(req, res) {

   const users = listUserService()

   return res.status(200).json(users)
}
