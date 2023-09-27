
// working 
export const getAllPets =  () => {
    return fetch(`http://localhost:8088/pets`).then((res) => res.json()
    )
}

//working
export const getPetsById = () => {
    return fetch(`http://localhost:8088/pets?_expand=petOwnerId`).then((res) => res.json()
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
  export const petEdited = (pet) => {
    return fetch(`http://localhost:8088/pets/${pet.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    }).then((res) => res.json())
  }

  // not found 
  export const petDelete =  (pet) => {
    return fetch (`http://localhost:8088/pets/${pet.id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
  }



