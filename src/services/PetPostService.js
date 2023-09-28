export const getAllPetPosts = () => {
    return fetch(`http://localhost:8088/petPosts`).then((res) => 
    res.json())
}

export const getPetPostsById = (petPosts) => {
    return fetch(`http://localhost:8088/petPosts?petPostId=${petPosts.id}`).then((res) =>
    res.json())
}