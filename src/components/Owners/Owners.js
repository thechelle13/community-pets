import { useEffect, useState } from "react"
import { getOwnersById } from "../../services/OwnerService"
import "./Owners.css"
import { useParams } from "react-router-dom"



export const Owners = () => {

    const [owners, setOwners] = useState([])
    const {ownerId} =useParams()
   


  useEffect(() => {
    getOwnersById(ownerId).then((ownerObj) => {
      setOwners(ownerObj)
    })
  }, [ownerId])

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
          <div key={owner.id}>{owner.id}
            </div>
        )
      })}
            <div className="owner-info"> Name:</div>
            <div className="owner-info"> Email:</div>
            <div className="owner-info"> City:</div>
            </section>
            {/* <button className="btn">Update</button>
            <button className="btn">Delete</button> */}
            </article>
        
            
        
            
        
        
    </div>
    )
}