import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/Nav/navBar"
import { Welcome } from "../components/Welcome/Welcome"
import { Owners } from "../components/Owners/Owners"
import { Pets } from "../components/Pets/Pets"
import { AddPets } from "../components/Forms/AddPets"
import { EditPet } from "../components/Forms/EditPets"
import { DeletePet } from "../components/Forms/DeletePet"
import { EditOwners } from "../components/Forms/EditOwners"
import { DeleteOwners } from "../components/Forms/DeleteOwners"

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
      <Route path="Owners" element={<Owners currentUser={currentUser}/> }/>
      <Route path="EditOwners" element={<EditOwners currentUser={currentUser}/> }/>
      <Route path="DeleteOwners" element={<DeleteOwners currentUser={currentUser}/> }/>
      <Route path="Pets" element={<Pets currentUser={currentUser}/>}/>
        <Route path="EditPets" element={<EditPet currentUser={currentUser}/>}/>
        <Route path="Pets/DeletePet" element={<DeletePet currentUser={currentUser}/>}/>
        <Route path="AddPets" element={<AddPets currentUser={currentUser}/>}/>
      </Route>
  </Routes> 
)}