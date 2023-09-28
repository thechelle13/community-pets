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
  // export const petEdited = (pets) => {
  //   return fetch(`http://localhost:8088/pets/${pets.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(pets),
  //   }).then((res) => res.json());
  // }

//
  export const petEdited = (editPet) => {
    return fetch(`http://localhost:8088/pets/${editPet}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPet),
    })
    // .then((res) => res.json());
  };
  
  // not found pets/undefined  -DeletePet
  export const petDelete =  (petId) => {
    return fetch (`http://localhost:8088/pets/${petId}`, {
      method: `DELETE`
    })
  
  }
// working petOwner Delete function
// export const userDelete =  (petOwnerId) => {
//   return fetch (`http://localhost:8088/petOwners/${petOwnerId}`, {
//     method: "DELETE"
//   })
  
// }



export const getPetById = (petId) => {
  return fetch(`http://localhost:8088/pets/${petId}`)
  .then((res) =>
    res.json()
  );
};




// http://localhost:8088/pets?petOwnerId=${petOwnerId} 

