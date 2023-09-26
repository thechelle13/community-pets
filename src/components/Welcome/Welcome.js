import "./Welcome.css"

export const Welcome = ()=> {
    return (
        
        <div className="welcome-container">
            <div className="cat" src="/assets/kitten.jpg" />
            <h1>
                <span className="welcome-title">Welcome to </span>
                <span>Community Pets</span>
            </h1>
            <div className="welcome-about">About:</div>
            <div className="welcome-tagline">A site to list your pets.</div>
            <div>
            <div className="about">Coming Soon...</div>
            <div className="about">An exchange pet service Board for fellow pet owners in your community.</div>
            </div>
        </div>
        
    )
}