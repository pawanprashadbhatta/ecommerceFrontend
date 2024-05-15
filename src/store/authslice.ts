import {createSlice,PayloadAction}from "@reduxjs/toolkit"
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
   status:"loading"
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

function register(data:registerData){
    return async function registerThunk(dispatch:any){

    }
}

function Login(data:loginData){
return async function loginThunk(dispatch:any){
    
}
}