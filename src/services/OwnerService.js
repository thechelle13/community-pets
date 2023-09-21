export const getAllOwners = () => {
    return fetch(`http://localhost:8088/petOwners?_expand=user`).then((res) => 
    res.json())
}
export const getOwnersById = (id) => {
    return fetch(`http://localhost:8088/petOwners?petOwnerId=${id}`).then((res) => res.json()
    )
}