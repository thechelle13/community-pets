export const createUser = (owner) => {
    return fetch("http://localhost:8088/petOwners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(owner),
    }).then((res) => res.json())
  }

  export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/petOwners?email=${email}`).then((res) =>
      res.json()
    )
  }

// export const getPetOwners = () => {
//     return fetch(`http://localhost:8088/users?isStaff=true`).then( (res) => res.json())
// }