// working 
export const getAllPets =  () => {
    return fetch(`http://localhost:8088/pets`).then((res) => res.json()
    )
}

// working - AddPet 
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
  // export const petEdited = (pets) => {
  //   return fetch(`http://localhost:8088/pets/${pets.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(pets),
  //   }).then((res) => res.json())
  // }


// PUT 404 not found - EditPets
  export const petEdited = (editedPet) => {
    return fetch(`http://localhost:8088/pets/${editedPet.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPet),
    }).then((res) => res.json());
  }
  
  // not found pets/undefined  -DeletePet
  export const petDelete =  (petId) => {
    return fetch (`http://localhost:8088/pets/${petId}`, {
      method: "DELETE"
    })
  
  }
// undefined ? 404 not found
export const getPetById = (petId) => {
  return fetch(`http://localhost:8088/pets/${petId}`).then((res) => res.json());
}
    



