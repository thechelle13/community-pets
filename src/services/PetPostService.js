export const getAllPetPosts = () => {
    return fetch(`http://localhost:8088/petPosts?_expand=user`).then((res) => 
    res.json())
}

export const getPetPostsById = (id) => {
    return fetch(`http://localhost:8088/petPosts?petPostId=${id}`).then((res) =>
    res.json())
}

export const createPost = (petOwnerId) => {
    return fetch("http://localhost:8088/petPosts?_expand=user", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(petOwnerId),
    }).then((res) => res.json())
    }

    export const getOwnerByEmail = (email) => {
        return fetch(`http://localhost:8088/petOwners?email=${email}`).then((res) =>
          res.json()
        )
      }