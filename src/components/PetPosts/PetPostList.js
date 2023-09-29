import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { getAllPetPosts} from "../../services/PetPostService";
import { getUserByEmail } from "../../services/UserService";

export const PetPostList = ({ petPosts, currentUser }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPetPosts().then((postArray) => {
      setAllPosts(postArray);
      // console.log("Type set.")
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

  const getUserEmail = async (petOwnerId) => {
    try {
      const user = await getUserByEmail(petOwnerId);
      if (user) {
        return user.email;
      }
    } catch (error) {
      // console.error("Error fetching owner email:", error);
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
                  <strong>Posted By:</strong>{" "}
                  {post.petOwnerId}
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  {post.petPostEmail}
                </div>
                <div>
                  <strong>Description:</strong> {post.description}
                </div>
                <div>
                  <strong>Sit Start Time:</strong> 
                  {post.sitStartDate}
                  {/* {(post.sitStartDate).toLocaleDateString()} */}
                </div>
                <div>
                  <strong>Sit End Time:</strong>
                   {/* {(post.sitEndDate).toLocaleDateString()} */}
                    {post.sitEndDate}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No pet posts available.</p>
        )}
      </div>
    </div>
  );
};
