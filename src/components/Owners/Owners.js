import { useEffect, useState } from "react"
import { getOwnersById } from "../../services/OwnerService"
import "./Owners.css"
import { useParams } from "react-router-dom"



export const Owners = () => {

    const [owners, setOwners] = useState([])
    const {ownerId} =useParams()

  //   useEffect(() => {
  //   getAllOwners().then((ownerArray) => {
  //       setOwners(ownerArray)
  //       console.log("Owners Set")
  //   })
    
  // }, [])

  useEffect(() => {
    getOwnersById(ownerId).then((ownerObj) => {
      setOwners(ownerObj)
    })
  }, [ownerId])

  return (
    <div className="welcome-container">
        <section className="pet">
        <h1 className="new">
                
                <span>Community Pets</span>
            </h1>
            </section>
        <article className="owner">
        <h2>My Details:</h2>
        <section className="owner">
            
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