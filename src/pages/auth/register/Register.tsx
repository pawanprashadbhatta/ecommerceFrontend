import { useDispatch } from "react-redux"
import Form1 from "../Form1"

import axios from "axios"
import { UserDataType } from "../Types"
const Register = () => {
  const dispatch = useDispatch()
  const handleRegister = async (data:UserDataType)=>{
    console.log(data)
    //dispatch(register(data))
    const response = await axios.post('http://localhost:3000/register',data)

  }
  return (
    <>
 <Form1 type="register" onSubmit={handleRegister}/>
    </>
  )
}

export default Register