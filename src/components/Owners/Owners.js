import { useEffect, useState } from "react"
import { getOwnersById } from "../../services/OwnerService"
import "./Owners.css"
import { useParams } from "react-router-dom"

export const Owners = () => {

    const [owners, setOwners] = useState([])
    const {petOwnerId} =useParams()

  useEffect(() => {
    getOwnersById(petOwnerId).then((ownerObj) => {
      setOwners(ownerObj)
      console.log("Owners Set")
    })
  }, [petOwnerId])

  return (
    <div className="welcome-container">
      
      {/* {pet.filter((owner) => pet.petOwnerId === petOwner.id) 
            .map((owner) => (
            <div key={owner.id}>{owner.name}</div>
            ))} */}
        <section className="pet">
        <h1 className="new">
                
                <span>Community Pets</span>
            </h1>
            </section>
        <article className="owner">
        <h2>My Details:</h2>
        <section className="owner">

        {owners.map((owner) => {
        return (
          <div className="owner" key={owner.id}>
          <div key={owner.id}>ID # {owner.id}</div> 
            <div>Name: {owner.fullName}</div>
            <div>City: {owner.city}</div>
            <div>Email: {owner.email}</div>
            <button className="form-btn" type="submit" 
    //    onClick={handleSave}
       >Update</button>
       <button className="form-btn" type="submit" 
    //    onClick={handleDelete}
       >Delete</button>
            </div>
            
        )
      })}

            
          </section>
        </article>
    </div>
    )
}