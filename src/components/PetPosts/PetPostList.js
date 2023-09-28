import React, { useState} from "react";
//import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


export const PetPostList = ({ petPosts, currentUser }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };

    //   const filteredPetPosts = petPosts.filter((post) => {
    //     const description = post.description.toLowerCase();
    //     const query = searchQuery.toLowerCase();
    //     return description.includes(query);
    //   });

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
          />
        </div>
      {petPosts && Array.isArray(petPosts) && petPosts.length > 0 ? (
        petPosts.map((post, index) => (
          <div key={index} className="post-container">
            <div>
              <strong>Posted By:</strong> {currentUser.email}
            </div>
            <div>
              <strong>Description:</strong> {post.description}
            </div>
            <div>
              <strong>Start Date:</strong>{" "}
              {post.sitStartDate.toLocaleDateString()}
            </div>
            <div>
              <strong>End Date:</strong> {post.sitEndDate.toLocaleDateString()}
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
