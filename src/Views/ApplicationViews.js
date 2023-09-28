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
import { PetPosts } from "../components/PetPosts/PetPosts"
import { PetPostList } from "../components/PetPosts/PetPostList"

export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})
    
    const [currentUserPets, setCurrentUserPets] = useState({})

    const [selectedPet, setSelectedPet] = useState({})
  
  useEffect(() => {
    const localPetUser = localStorage.getItem("pet_user")
    const petUserObject = JSON.parse(localPetUser)
    setCurrentUser(petUserObject)
  }, [] )


  useEffect(() => {
    const fetchUserPets = async (petOwnerId) => {
      try {
        const response = await fetch(`http://localhost:8088/pets?petOwnerId=${petOwnerId}`);
        if (response.ok) {
          const userPetsData = await response.json();
          setCurrentUserPets(userPetsData);
        } else {
          console.error("Failed to fetch user's pets");
        }
      } catch (error) {
        console.error("Error fetching user's pets:", error);
      }
    };

    fetchUserPets();
  }, [currentUser.id] )
  

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
      <Route index element={<Welcome currentUser={currentUser}/>}/>
      <Route path="Owners" element={<Owners currentUser={currentUser}/> }/>
      <Route path="EditOwners" element={<EditOwners currentUser={currentUser} setCurrentUser={setCurrentUser}/> }/>
      <Route path="DeleteOwners" element={<DeleteOwners currentUser={currentUser}/> }/>
      <Route path="Pets" element={<Pets currentUser={currentUser} currentUserPets={currentUserPets}/>}/>
        <Route path="EditPets" element={<EditPet currentUser={currentUser} setSelectedPet={setSelectedPet} selectedPet={selectedPet}/>}/>
        <Route path="DeletePet" element={<DeletePet currentUser={currentUser} currentUserPets={currentUserPets}  setCurrentUser={setCurrentUser} />}/>
        <Route path="AddPets" element={<AddPets currentUser={currentUser}/>}/>
        <Route path="PetPosts" element={<PetPosts currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
        <Route path="PetPostList" element={<PetPostList currentUser={currentUser} setCurrentUser={setCurrentUser} petPosts={PetPosts} />}/>
      </Route>
  </Routes> 
)}