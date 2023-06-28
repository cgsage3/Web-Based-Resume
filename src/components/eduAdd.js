import { useState } from 'react';
function EduAdd() {
    const [degree, setDeg] = useState("");
    const [field, setField] = useState("");
    const [institution, setInst] = useState("");
    const [address, setAddy] = useState("");
    const [year, setYear] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'https://resume-mern.onrender.com/add-edu', {
            method: "post",
            body: JSON.stringify({ degree, field, institution, address, year  }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");

        }
    }
    return (
        <>
            <h1>Add Education</h1>
            <form action="">
              <>
                <label htmlFor="my-degree">Degree:</label>
                <input  id="my-degree" type="text" placeholder="Degree"
                value={degree} onChange={(e) => setDeg(e.target.value)} />    
              </>               

              <>
                <label htmlFor="my-field">Field of study:</label>
                <input  id="my-field" type="text" placeholder="Field"
                value={field} onChange={(e) => setField(e.target.value)} />    
              </> 
                
               <>
                <label htmlFor="my-institution">Institution:</label>
                <input  id="my-institution" type="text" placeholder="Institution"
                value={institution} onChange={(e) => setInst(e.target.value)} />    
              </> 
                
               <>
                <label htmlFor="my-address">Address:</label>
                <input  id="my-address" type="text" placeholder="Address"
                value={address} onChange={(e) => setAddy(e.target.value)} />    
              </> 
                
               <>
                <label htmlFor="my-year">Year:</label>
                <input  id="my-year" type="text" placeholder="Year"
                value={year} onChange={(e) => setYear(e.target.value)} />    
              </> 
                
                <button type="submit"
                onClick={onSubmit}>submit</button>
            </form>

        </>
    );
}
export default EduAdd;