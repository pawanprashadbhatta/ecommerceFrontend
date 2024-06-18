import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
axios.defaults.withCredentials = true;
import Home from "./pages/home/Home"
import Register from "./pages/auth/register/Register"
import Login from "./pages/auth/login/Login"
import axios from "axios";
const App = () => {
  return (
 <Provider store={store}>
   <BrowserRouter>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
  </Routes>
  
  </BrowserRouter>
 </Provider>
  )
}

export default App


