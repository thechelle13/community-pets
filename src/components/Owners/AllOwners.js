// import { useState, useEffect } from "react";
// import "./Owners.css"
// import { getPetOwnersByUserId } from "../../services/customerService";
// import { useParams } from "react-router-dom";

// export const OwnerDetails = () => {
//     const [owner, setOwner] = useState([])
//     const {ownerId} = useParams()
    
//     useEffect(() => {
//         getPetOwnerByUserId(ownerId).then( (ownerInfo)=> {
//             const ownerObj = ownerInfo[0]
//             setOwner(ownerObj)
//         })
//     }
//     , [ownerId])

//     return (
//         <section className="owner">
//             <header className="owner-header">{owner.user?.fullName}</header>
//             <div>
//                 <span className="owner-info">Email</span>
//                 {owner.user?.email}
//             </div>
//             <div>
//                 <span className="owner-info">City</span>
//                 {owner.city}
//             </div>
//                   
//         </section>
//     )
// }