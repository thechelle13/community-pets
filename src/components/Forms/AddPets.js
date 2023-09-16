import "./Form.css"

export const AddPets = () => {
    return (
        <form className="profile">
            <h2>Update Pets</h2>
            <fieldset>
                <div className="form-group">
                    <label>Pet Type:</label>

                    <input type="text"  required className="form-control"/>
                    <select>
                        
                    </select>

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text"  required className="form-control"/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn">Save Pet</button>
                </div>
            </fieldset>
        </form>
    )
}