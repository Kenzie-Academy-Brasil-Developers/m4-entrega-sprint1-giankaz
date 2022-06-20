import * as yup from 'yup'

const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(3, "Password should have atleast 03 characters"),
    isAdm: yup.boolean().required()
})

export default userSchema