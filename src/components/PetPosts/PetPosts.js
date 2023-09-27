import { useEffect, useState } from "react"

export const PetPosts = () => {
    const [petPost,setPetPost] = useState([])

    useEffect(()=> {
        setPetPost()
    },[])
    return <>
    <div className="welcome-container">
        <section className="pet">
        <h2 className="new">
            <span> Community Pets </span>
            <span>Pet Posting Exchange</span>
        
            </h2>
            </section> 
        <section className="pet">
            <div > Pet Post Exchange </div>
        </section>

        <section className="pet">Pet Post containing petOwner email, city, names or number of pets of user and date of sit</section>

    </div>
    </>
}