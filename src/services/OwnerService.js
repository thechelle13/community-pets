
//working
export const getAllOwners = () => {
    return fetch(`http://localhost:8088/petOwners?_expand=petOwnerId`).then((res) => 
    res.json())
}


