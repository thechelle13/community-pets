import { useEffect, useState } from "react"
import { getAllOwners, getOwnersById} from "../../services/OwnerService"
import "./Owners.css"
import { useNavigate, useParams} from "react-router-dom"

export const Owners = ({currentUser}) => {
 
    const [owners, setOwners] = useState([])
    //const [owner, setSingleOwner] =useState([])
    const {ownerId} =useParams()

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
//   const handleSave = (event) => {
//     event.preventDefault()
//         Navigate(`/`)
// }

// const handleDelete = (event) => {
//     event.preventDefault()
//     Navigate(`/`)
// }

  return (<>
    <div className="welcome-container">
      <section className="owners">
        <h1 className="new">               
            <span>Community Pets</span>
        </h1>
      </section>
    </div>

    <div className="owners-container">
      <h2>My Details:</h2>
      <article className="owner">
         {/* {owners.map((ownerObj) => { */}
          {/* return (       */}
           
              <div >User #: {currentUser.id}
              </div>
              <div >Name: {currentUser.fullName}
              </div>
              <div >Email: {currentUser.email}
              </div>
              <div >City: {currentUser.city}
              </div>
          <button className="btn">Update</button>
          <button className="btn">Delete</button>
         </article>
    </div>
        
    </>  
  )
}
            
   