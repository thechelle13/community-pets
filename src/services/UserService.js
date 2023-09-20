export const createUser = (petOwner) => {
    return fetch("http://localhost:8088/petOwners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petOwner),
    }).then((res) => res.json())
  }

  export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/petOwners?email=${email}`).then((res) =>
      res.json()
    )
  }

