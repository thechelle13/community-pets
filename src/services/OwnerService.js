export const getAllOwners = () => {
    return fetch(`http://localhost:8088/petOwners`).then((res) => 
    res.json())
}