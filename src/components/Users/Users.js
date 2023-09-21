import "./User.css"


// address different users here - render of which user and what info

export const User = ({user}) => {
    return (
        <div className="user">
            <div>
                <div className="user-info">Full Name</div>
                <div>{user.fullName}</div>
            </div>
            <div>
                <div className="user-info">Email</div>
                <div>{user.email}</div>
            </div>
            {/* <div>
                <div className="user-info">City</div>
                <div>{user.city}</div>
            </div> */}
            
        </div>
    )
}