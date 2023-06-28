import { useState } from 'react';
function BioAdd() {
    const [bio, setBio] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'https://resume-mern.onrender.com/add-info', {
            method: "post",
            body: JSON.stringify({ bio }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        result = await result.json();
        // console.warn(result);
        if (result) {
            alert("Data saved succesfully");

        }
    }
    return (
        <>
            <h1>Add personal information</h1>
            <form action="">
              <>
                <label htmlFor="my-bio">Biography:</label>
                <textarea rows="4" cols="50" id="my-bio" type="text" placeholder="Bio"
                value={bio} onChange={(e) => setBio(e.target.value)} />    
              </> 
                
                <button type="submit"
                onClick={onSubmit}>submit</button>
            </form>

        </>
    );
}
export default BioAdd;