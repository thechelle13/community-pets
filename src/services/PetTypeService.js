export const getAllPetTypes = () => {
    return fetch(`http://localhost:8088/petTypes`).then((res) => 
    res.json())
}