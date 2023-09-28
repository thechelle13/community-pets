export const getAllOwners = () => {
    return fetch(`http://localhost:8088/petOwners`).then((res) => 
    res.json())
}

export const getOwnersById = (id) => {
    return fetch(`http://localhost:8088/petOwners${id}`).then((res) => res.json()
    )
}
