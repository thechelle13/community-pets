// working 
export const getAllPets =  () => {
    return fetch(`http://localhost:8088/pets`).then((res) => res.json()
    )
}

// undefined ?
export const getPetById = () => {
    return fetch(`http://localhost:8088//pets?_expand=petOwnerId`).then((res) => res.json()
    )
}

// working
export const createNewPet = (newPet) => {
    return fetch(`http://localhost:8088/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    }).then((res) => res.json())
  }

  // fetch not found 404 on PUT /undefined
  export const petEdited = (pets) => {
    return fetch(`http://localhost:8088/pets/${pets}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pets),
    }).then((res) => res.json())
  }

  
  // not found pets/undefined 
  export const petDelete =  (petId) => {
    return fetch (`http://localhost:8088/pets/${petId}`, {
      method: "DELETE"
    })
  
  }

    



