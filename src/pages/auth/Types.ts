export interface Props{
    type : string,
    onSubmit : (data:UserDataType)=>void
  }

export interface UserDataType{
    email : string, 
    password : string, 
    userName : string,
    token:string
}

export interface UserLoginType{
  email : string, 
  password : string, 
 
}