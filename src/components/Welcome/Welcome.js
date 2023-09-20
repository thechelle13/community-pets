import "./Welcome.css"

export const Welcome = ()=> {
    return (
        <div className="welcome-container">
            
            <h1>
                <span>Welcome to </span>
                <span>Community Pets</span>
            </h1>
            <div className="about">About:</div>
            <div className="about">A fun place to see community pets.</div>
            <div>
            <div className="about">Coming Soon...</div>
            <div className="about">An exchange pet service Board for fellow pet owners in your community.</div>
            </div>
        </div>
    )
}