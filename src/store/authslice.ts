import {createSlice,PayloadAction}from "@reduxjs/toolkit"
import axios from "axios"

import API from "../global/http"
interface registerData{
    email:string,
    password:string,
    userName:string
}
interface loginData{
    email:string,
    password:string,
   
}
interface User{
    uername:string,
    email:string,
    password:string,
    token:string,
    
}
interface AuthState{
    user:User,
    status:string
}
const initialState:AuthState={
   user: {}as User,
   status:""
}

const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setUser(state:AuthState,action:PayloadAction<User>){
state.user=action.payload
        },
        setStatus(state:AuthState,action:PayloadAction<string>){
            state.status=action.payload
        }
    }
})
export const {setUser,setStatus} = authSlice.actions
export default authSlice.reducer

export function register(data:registerData){
    return async function registerThunk(dispatch:any){
        dispatch(setStatus('loading'))
try {
    const response=await API.post("register",data)
    if(response.status===201){
        dispatch(setStatus('success'))

    }else{
dispatch(setStatus('error'))
    }
} catch (error) {
    dispatch(setStatus("error"))
}
    }
}

export function Login(data:loginData){
return async function loginThunk(dispatch:any){
    dispatch(setStatus("loading"))
    try {
        const response=await API.post("login",data)
        if(response.status===201){
            dispatch(setStatus("success"))
        }else{
            dispatch(setStatus('error'))
        }
    } catch (error) {
        dispatch(setStatus("error"))
        
    }

}
}