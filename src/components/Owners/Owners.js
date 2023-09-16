import { useEffect, useState } from "react"
import { getAllOwners } from "../../services/OwnerService"
import "./Owners.css"



export const Owners = () => {

    const [owners, setOwners] = useState([])

    useEffect(() => {
    getAllOwners().then((ownerArray) => {
        setOwners(ownerArray)
        console.log("Owners Set")
    })
    
  }, [])

  return 

}