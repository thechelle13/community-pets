// import { useNavigate } from "react-router-dom"
// import { petDelete } from "../../services/PetService"
// import "./Addpets.css"
// import { useEffect, useState } from "react"


// export const DeletePet =({currentUser}) => {
// const [selectedDelPet, setSelectedDelPet] = useState([])

// const Navigate = useNavigate()

// useEffect( ()=>{
//     setSelectedDelPet()
// },[])

// const handleDelete = (event) => {
//             event.preventDefault()
    
//             const delPet = {
//                 id: currentUser.petId,
                
//             }
//             petDelete(selectedDelPet).then(() => {
//                 Navigate(`/Pets`)
//             })
//             }
//     return (
//         <div className="welcome-container">
//         <section className="pet">
//         <h1 className="new">
//                 <span>Community Pets</span>
//             </h1>
//             </section>
//         <form className="form">
//             <h2>Pet Delete:</h2>
//             {selectedDelPet}
//         <div>
//         <button className="form-btn" onClick={handleDelete} >Delete this Pet?</button>
//         </div>
//         </form>
//         </div>
//     )
// }
import { useNavigate } from "react-router-dom";
import { petDelete, getPetById } from "../../services/PetService"; // Import the getPetById function
import "./Addpets.css";
import { useEffect, useState } from "react";

export const DeletePet = ({ currentUser }) => {
  const [selectedDelPet, setSelectedDelPet] = useState([]); // Initialize as null
  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch the selected pet's information when the component mounts
    getPetById(currentUser.petId).then((pet) => {
      setSelectedDelPet(pet);
    });
  }, [currentUser.petId]);

  const handleDelete = (event) => {
    event.preventDefault();

    const delPet = {
      id: selectedDelPet.id, // Use the ID of the selected pet
    };

    // Call the petDelete function with the selected pet's ID
    petDelete(delPet.id).then(() => {
      Navigate(`/Pets`);
    });
  };

  return (
    <div className="welcome-container">
      <section className="pet">
        <h1 className="new">
          <span>Community Pets</span>
        </h1>
      </section>
      <form className="form">
        <h2>Pet Delete:</h2>
       
        {selectedDelPet && (
          <div>
            <p>Name: {selectedDelPet.name}</p>
            <p>Pet Type: {selectedDelPet.petType}</p>
            <p>Description: {selectedDelPet.description}</p>
          </div>
        )}
        <div>
          <button className="form-btn" onClick={handleDelete}>
            Delete this Pet?
          </button>
        </div>
      </form>
    </div>
  );
};
