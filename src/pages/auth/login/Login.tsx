import { useNavigate } from "react-router-dom";
import Form1 from "../Form1";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {  UserLoginType } from "../Types";
import { useEffect } from "react";
import { Status } from "../../../global/types/types";
import { login, resetStatus } from "../../../store/authslice";

const Login = () => {
  const navigate =useNavigate()
  const {status}= useAppSelector((state)=>state.auth)
  console.log(status)
  const dispatch = useAppDispatch()
  const handleLogin = async (data:UserLoginType)=>{
  
    console.log(data)
    dispatch(login(data))
  
  }
  useEffect(()=>{
    if(status === Status.SUCCESS){
      dispatch(resetStatus())
      navigate('/')

    }
  },[status,navigate,dispatch])
  
  return (
    <>
        <Form1 type="login" onSubmit={handleLogin}/>
    </>
  );
};

export default Login;
