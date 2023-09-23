export const createUser = (petOwnerId) => {
    return fetch("http://localhost:8088/petOwners?_expand=user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petOwnerId),
    }).then((res) => res.json())
  }

  export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/petOwners?email=${email}`).then((res) =>
      res.json()
    )
  }

  export const getUserById = (id) => {
    return fetch(`http://localhost:8088/petOwners?petOwnerId=${id}`).then((res) =>
      res.json()
    )
  }