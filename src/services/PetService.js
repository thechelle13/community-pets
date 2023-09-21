export const getAllPets =  () => {
    return fetch(`http://localhost:8088/pets`).then((res) => res.json()
    )
}

export const getPetsById = (petId) => {
    return fetch(`http://localhost:8088/pets?petId=${petId}`).then((res) => res.json()
    )
}
export const createNewPet = (petOwnerId) => {
    return fetch(`http://localhost:8088/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petOwnerId),
    }).then((res) => res.json())
  }

  export const petEdit = (petId,editPet) => {
    return fetch(`http://localhost:8088/pets/${petId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPet),
    }).then((res) => res.json())
  }

  export const petDelete =  () => {
    return fetch (`http://localhost:8088/pets`, {
      method: "DELETE",
    }).then((res) => res.json())
    
  }



