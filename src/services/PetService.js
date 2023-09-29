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

  
//
  export const petEdited = (pets) => {
    return fetch(`http://localhost:8088/pets/${pets.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pets),
    })
     .then((res) => res.json());
  };
  
  // working !!!!!!!
  export const petDelete =  (petId) => {
    return fetch (`http://localhost:8088/pets/${petId}`, {
      method: `DELETE`
    })
  
  }




export const getPetByPetOwnerId = async (petOwnerId) => {
  return fetch(`http://localhost:8088/pets?petOwnerId=${petOwnerId}`)
  .then((res) =>
    res.json()
  );
};

 // useEffect(() => {
  //   const fetchUserPets = async (petOwnerId) => {
  //     try {
  //       const response = await fetch(`http://localhost:8088/pets?petOwnerId=${petOwnerId}`);
  //       if (response.ok) {
  //         const userPetsData = await response.json();
  //         setCurrentUserPets(userPetsData);
  //       } else {
  //         console.error("Failed to fetch user's pets");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user's pets:", error);
  //     }
  //   };

  //   fetchUserPets();
  // }, [currentUser.id] )


// http://localhost:8088/pets?petOwnerId=${petOwnerId} 

