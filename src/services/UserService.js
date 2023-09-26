
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
// /undefined PUT 404 not found
  export const userEdited = (editUser) => {
    return fetch(`http://localhost:8088/petOwners/${editUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUser),
    }).then((res) => res.json())
  }

  // not done
  export const userDelete =  () => {
    return fetch (`http://localhost:8088/petOwners`, {
      method: "DELETE",
    })
    .then((res) => res.json())
  }