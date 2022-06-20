import listUserService from "../services/listUser.service";

export default async function listUserController(req, res) {

   
      const users = await listUserService()

       return res.status(200).json(users) 
      
 
}
