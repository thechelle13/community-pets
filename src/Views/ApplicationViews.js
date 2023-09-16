import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/Nav/navBar"
import { Welcome } from "../components/Welcome/Welcome"
import { Owners } from "../components/Owners/Owners"
import { Pets } from "../components/Pets/Pets"

export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})
  
  
  useEffect(() => {
    const localPetUser = localStorage.getItem("pet_user")
    const petUserObject = JSON.parse(localPetUser)
    setCurrentUser(petUserObject)
  }, [] )

    return (

 <Routes>
            <Route 
            path="/" 
            element={
              <>
              <NavBar />
            
              <Outlet />
              </>
            }
            >
              <Route index element={<Welcome/>}/>
            <Route path="owners" element={<Owners /> }/>
            <Route path="pets">
              <Route index element={<Pets />} />
              
            </Route>
            
              <Route path="profile" element={<>Profile </>}/>
            </Route>
  </Routes> 
    )
}