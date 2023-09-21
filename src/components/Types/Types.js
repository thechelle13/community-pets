// import { useEffect, useState } from "react"
// import "./Types.css"
// import { getAllPetTypes } from "../../services/PetTypeService"


// export const Types = () => {
//     const [ petType, setPetTypes] = useState([])

//     useEffect( () => {
//         getAllPetTypes().then((petTypeArray) =>{
//             setPetTypes(petTypeArray)
//             console.log("Types Set")
//         })
//     }, [])

//     return <Types petTypeArray={petType}/>
// }