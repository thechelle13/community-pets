import { useEffect, useState } from "react"
import { getAllOwners } from "../../services/OwnerService"
import { Owners } from "./Owners"



export const AllOwners = () => {
  const [owners, setOwners] = useState([])

  useEffect(() => {
    getAllOwners().then((ownersArray) => {
      setOwners(ownersArray)
    })
  }, [])

  return <Owners ownersArray={owners} />
}