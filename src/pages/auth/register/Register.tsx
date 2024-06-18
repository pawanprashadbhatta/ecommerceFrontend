
import Form1 from "../Form1"


import { UserDataType } from "../Types"
import { useAppDispatch, useAppSelector } from "../../../store/hook"
import { register, resetStatus } from "../../../store/authslice"
import { useEffect } from "react"
import { Status } from "../../../global/types/types"
import { useNavigate } from "react-router-dom"
const Register = () => {
  const navigate =useNavigate()
  const {status}= useAppSelector((state)=>state.auth)
  console.log(status)
  const dispatch = useAppDispatch()
  const handleRegister = async (data:UserDataType)=>{
  
    console.log(data)
    dispatch(register(data))
  
  }
  useEffect(()=>{
    if(status  === Status.SUCCESS){
      dispatch(resetStatus())
      navigate('/login')
      
    }
  },[status,navigate,dispatch])
  return (
    <>
 <Form1 type="register" onSubmit={handleRegister}/>
    </>
  )
}

export default Register




