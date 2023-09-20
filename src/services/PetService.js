export const getAllPets =  () => {
    return fetch(`http://localhost:8088/pets`).then((res) => res.json()
    )
}

export const getPetsById = (petId) => {
    return fetch(`http://localhost:8088/pets?petId=${petId}`).then((res) => res.json()
    )
}
export const createNewPet = (pet) => {
    return fetch(`http://localhost:8088/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    }).then((res) => res.json())
  }

  export const petEdit = (editPet) => {
    return fetch(`http://localhost:8088/pets`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPet),
    }).then((res) => res.json())
  }


//   export const petEdit = async(petEdited) => {
 
//     const res = await fetch (`http://localhost:8088/pets/${petEdited}`
//        ,{
//        method: "PUT",
//        headers: {
//                "Content-Type": "application/json"
//        },
//        body: JSON.stringify(petEdited)
//    })
//    const editPet = await res.json()
//    return editPet
// }

  export const petDelete =  () => {
    return fetch (`http://localhost:8088/pets`, {
      method: "DELETE",
    }).then((res) => res.json())
    
  }

// export const petDelete = async(petDeleted) => {

//     const res = await fetch (`http://localhost:8088/pets/${petDeleted}`
//    ,{
//        method: "DELETE",
  
//    })
//    const deletePet = await res.json()
//    return deletePet
// }

