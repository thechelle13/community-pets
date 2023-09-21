// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// export const RegisterPet = (props) => {
//   const [newPet, setNewPet] = useState({
//     id: "",
//     name: "",
//     petType: "",
//     petOwnerId: 0, 
//     description: ""
//   })
//   let navigate = useNavigate()

//   const registerNewPet = () => {
//     createPet(pet).then((createdPet) => {
//       if (createdPet.hasOwnerProperty("petOwnerId")) {
//         localStorage.setNewPet(
//           "pet_user",
//           JSON.stringify({
//             id: createdPet.petOwnerId,         
//           })
//         )

//         navigate("/")
//       }
//     })
//   }

//   const handleRegister = (e) => {
//     e.preventDefault()
//     getPetByPetOwnerId(pet.petOwnerId).then((response) => {
      
//        registerNewPet()
//       }
//     )
//   }

//   const updatePet = (evt) => {
//     const copy = { ...pet }
//     copy[evt.target.id] = evt.target.value
//     setPet(copy)
//   }

//   return (
//     <main style={{ textAlign: "center" }}>
//       <form className="form-login" onSubmit={handleRegister}>
//         <h1>Community Pet</h1>
//         <h2>Please Register Pet</h2>
//         <fieldset>
//           <div className="form-group">
//             <input
//               onChange={updatePet}
//               type="text"
//               id="name"
//               className="form-control"
//               placeholder="Enter pet name"
//               required
//               autoFocus
//             />
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <input
//               onChange={updatePet}
//               type="text"
//               id="description"
//               className="form-control"
//               placeholder="Pet Description"
//               required
//             />
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <label>
//               <input
//                 onChange={(evt) => {
//                   const copy = { ...customer }
//                   copy.isStaff = evt.target.checked
//                   setPet(copy)
//                 }}
//                 type="checkbox"
//                 id="isPetOwner"
//               />
//               I am a pet owner{" "}
//             </label>
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <button className="login-btn btn-info" type="submit">
//               Register
//             </button>
//           </div>
//         </fieldset>
//       </form>
//     </main>
//   )
// }