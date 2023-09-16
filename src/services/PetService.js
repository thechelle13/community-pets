export const getAllPets =  () => {
    return fetch(`http://localhost:8088/petProfiles?_expand=user`).then((res) => res.json()
    )
}