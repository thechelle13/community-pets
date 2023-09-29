import React, { useEffect, useState } from "react";
import "./PetPosts.css"
import "react-datepicker/dist/react-datepicker.css";
import { getAllPetPosts } from "../../services/PetPostService";
import { getUserById } from "../../services/UserService";
// import DatePicker from "react-datepicker"

export const PetPostList = ({ petPosts, currentUser }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPetPosts().then((postArray) => {
      setAllPosts(postArray);
     
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPetPosts = allPosts.filter((post) => {
    const description = post.description.toLowerCase();
    const query = searchQuery.toLowerCase();
    return description.includes(query);
  });

  const getOwnerEmail = async (petOwnerId) => {
    try {
      const user = await getUserById(petOwnerId);
      if (user) {
        return user.email;
      }
    } catch (error) {
      console.error("Error fetching owner email:", error);
    }
    return "Unknown";
  };

  return (
    <div className="welcome-container">
      <section className="pet">
        <h2 className="new">
          <span> Community Pets </span>
          <span>Pet Sitting Exchange</span>
        </h2>
      </section>
      <div className="pet">
        <h2>The Exchange</h2>
        <div>
          <input
            type="text"
            placeholder="Search by description..."
            value={searchQuery}
            onChange={handleSearchChange}
            autoComplete="off"
          />
        </div>
        {filteredPetPosts && Array.isArray(filteredPetPosts) && filteredPetPosts.length > 0 ? (
          filteredPetPosts.map((post, index) => (
            <div key={index} className="post-container">
              <div className="owner">
              <div>
                <strong>Posted By:</strong> {post.petOwnerId}
              </div>
              <div>
                <strong>Description:</strong> {post.description}
              </div>
              </div>
              {/* <div>
                <strong>Start Date:</strong>{" "}
                {post.sitStartDate.toLocaleDateString()}
              </div>
              <div>
                <strong>End Date:</strong>{" "}
                {post.sitEndDate.toLocaleDateString()}
              </div> */}
            </div>
          ))
        ) : (
          <p>No pet posts available.</p>
        )}
      </div>
    </div>
  );
};
