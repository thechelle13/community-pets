export const getAllPets =  () => {
    return fetch(`http://localhost:8088/petProfiles`).then((res) => res.json()
    )
}