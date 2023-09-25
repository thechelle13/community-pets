import { useEffect, useState } from "react"
import { getAllOwners} from "../../services/OwnerService"
import "./Owners.css"
import { useNavigate} from "react-router-dom"

export const Owners = ({currentUser}) => {
 
    const [owners, setOwners] = useState([])
   // const [owner, setSingleOwner] =useState([])
    // const {ownerId} =useParams()

    const Navigate = useNavigate()

  useEffect(() => {
    getAllOwners().then((ownerObj) => {
      setOwners(ownerObj)
      console.log("Owners Set", ownerObj)
    })
  }, [])
  
//   useEffect(()=> {
//     getOwnersById(ownerId).then((data) => {
//         const singleOwner = data[0]
//         if(singleOwner) {
//             setSingleOwner(singleOwner)
//             console.log("Owner Set", data)
//         }
//     }
//     )
// }, [ownerId])

// stretch goal buttons 
  const handleSave = (event) => {
    event.preventDefault()
        Navigate(`/`)
}

const handleDelete = (event) => {
    event.preventDefault()
    Navigate(`/`)
}

  return (
    <div className="welcome-container">
      

        <section className="pet">
        <h1 className="new">
                
                <span>Community Pets</span>
            </h1>
            </section>
        <article className="owner">
        <h2>My Details:</h2>
        
        
         {owners.map((owner) => {
        return (
          <div className="owner" key={owner.id} >
          <div key={owner.id}>ID # {currentUser.id}</div> 
            <div >Name: {owner.fullName}</div>
            <div>City: {owner.city}</div>
            <div>Email: {owner.email}</div>
            
            <button className="form-btn" type="submit" 
        onClick={handleSave}
       >Update</button>
       <button className="form-btn" type="submit" 
       onClick={handleDelete}
       >Delete</button>
            </div>
            
        )
      })}          
     
        </article>
    </div>
    )
} 

// {owner && (
//   <div className="owner" key={owner.id}>
//       <div>ID # {owner.id}</div> 
//       <div>Name: {owner.fullName}</div>
//       <div>City: {owner.city}</div>
//       <div>Email: {owner.email}</div>
//       <button className="form-btn" type="submit" onClick={handleSave}>Update</button>
//       <button className="form-btn" type="submit" onClick={handleDelete}>Delete</button>
//   </div>
// )}

// </article>
// </div>
// )
// }







 


