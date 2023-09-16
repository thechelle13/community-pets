
import "./App.css"
import { Routes, Route} from "react-router-dom"
import { Login } from "./components/Auth/Login"
import { Register } from "./components/Auth/Register"
import { Authorized } from "./Views/Authorized"
import { ApplicationViews } from "./Views/ApplicationViews"

export const App = () => {
  
  return <Routes>
        
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
          } 
          />
        </Routes>
  
}


