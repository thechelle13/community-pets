
//working post
export const createUser = (petOwnerId) => {
    return fetch("http://localhost:8088/petOwners?_expand=user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petOwnerId),
    }).then((res) => res.json())
  }

// used in Login
  export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/petOwners?email=${email}`).then((res) =>
      res.json()
    )
  }

  export const getUserById = (id) => {
    return fetch(`http://localhost:8088/petOwners?id=${id}`).then((res) =>
      res.json()
    )
  }

//PUT / undefined 404 not found http://localhost:8088/petOwners/${petOwner.id}
// /[objectObject] PUT 404 not found http://localhost:8088/petOwners/${petOwner}

  export const userEdited = (petOwnerId) => {
    return fetch(`http://localhost:8088/petOwners/${petOwnerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petOwnerId),
    }).then((res) => res.json())
  }

// /[objectObject] DELETE 404 not found
  export const userDelete =  (petOwnerId) => {
    return fetch (`http://localhost:8088/petOwners/${petOwnerId}`, {
      method: "DELETE"
    })
    
  }

