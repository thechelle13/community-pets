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
// working!
export const userDelete =  (petOwnerId) => {
  return fetch (`http://localhost:8088/petOwners/${petOwnerId}`, {
    method: "DELETE"
  })
  
}

  export const getUserById = (id) => {
    return fetch(`http://localhost:8088/petOwners?id=${id}`).then((res) =>
      res.json()
    )
  }

  export const userEdited = (petOwners) => {
    return fetch(`http://localhost:8088/petOwners/${petOwners.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petOwners),
    }).then((res) => res.json())
  }

//   export const userEdited = async(petOwners) => {
 
//     const res = await fetch (`http://localhost:8088/petOwners/${petOwners.id}`
//        ,{
//        method: "PUT",
//        headers: {
//                "Content-Type": "application/json"
//        },
//        body: JSON.stringify(petOwners)
//    })
//    const editOwner = await res.json()
//    return editOwner
// }

