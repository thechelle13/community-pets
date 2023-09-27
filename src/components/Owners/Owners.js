import { useEffect } from "react"
import "./Owners.css"
import { useNavigate} from "react-router-dom"

export const Owners = ({currentUser}) => {
    //const [owners, setOwners] = useState([])
    const Navigate = useNavigate()

    useEffect( ()=> {
      
    },[currentUser.fullName])
  

const handleSave = (event) => {
  event.preventDefault()
      Navigate(`/EditOwners`) 
}
  const handleDelete = (event) => {
      event.preventDefault()    
      Navigate(`/DeleteOwners`)
}

  return (
    <div className="welcome-container">
            <section className="pet">
            <h1 className="new">
                
                <span>Community Pets</span>
            </h1>
            </section>
      <form className="form"> 
        <section className="form-group">
            <h2>My Details:</h2>
          <article className="owner">
                    
              <div >User #: {currentUser.id}
              </div>
              <div >Name: {currentUser.fullName}
              </div>
              <div >Email: {currentUser.email}
              </div>
              <div >City: {currentUser.city}
              </div>
              <button className="form-btn" type="submit" 
                onClick={handleSave}
                >Update</button>
              <button className="form-btn" type="submit" 
                onClick={handleDelete}
                >Delete</button>
          </article>
        </section> 
      </form>
    </div> 
  )
}



