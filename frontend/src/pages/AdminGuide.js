const AdminGuide = () => {
    return (
        <div>
            <div>
                <h3>Add a new shoe:</h3>
                <h4>1.</h4>
                <p>Click the "Admin" button:</p>
                <img src="adminStep1.png" alt="" width="500px" />
                <h4>2.</h4>
                <p>Fill in the form:</p>
                <img src="adminStep2.png" alt="" width="500px" />
                <p>All fields must be filled in to submit the form.</p>
            </div>
            <div>
                <h3>Update a shoe:</h3>
                <h4>1.</h4>
                <p>Find the <em>_id</em> property of the shoe you wish to update</p>
                <h4>2.</h4>
                <p>Click the "Admin" button:</p>
                <img src="adminStep1.png" alt="" width="500px" />
                <h4>3.</h4>
                <p>Fill in the form:</p>
                <img src="adminStep3.png" alt="" width="500px" />
                <p>All fields must be filled in to submit the form.</p>
            </div>
            <div>
                <h3>Delete a shoe:</h3>
                <h4>1.</h4>
                <p>Find the shoe you wish to delete</p>
                <h4>2.</h4>
                <p>Click the "delete" button:</p>
                <img src="adminStep4.png" alt="" width="500px" />
            </div>
        </div>
    );
}

export default AdminGuide;