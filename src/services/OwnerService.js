
//working
export const getAllOwners = () => {
    return fetch(`http://localhost:8088/petOwners?_expand=petOwnerId`).then((res) => 
    res.json())
}

// showing not found - used in Owners
export const getOwnersById = (id) => {
    return fetch(`http://localhost:8088/petOwners?_expand=id${id}`).then((res) => res.json()
    )
}
