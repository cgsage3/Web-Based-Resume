import { useState } from 'react';
function ExpAdd() {
    const [year, setYear] = useState("");
    const [position, setPos] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [details, setDetails] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'https://resume-mern.onrender.com/add', {
            method: "post",
            body: JSON.stringify({ year, position, companyName, details }),
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
            <h1>Add Experiences</h1>
            <form action="">
                <input type="text" placeholder="Year"
                value={year} onChange={(e) => setYear(e.target.value)} />

                <input type="text" placeholder="Position"
                value={position} onChange={(e) => setPos(e.target.value)} />

                <input type="text" placeholder="Company Name"
                value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                
                <textarea rows="4" cols="50" type="text" placeholder="Details"
                value={details} onChange={(e) => setDetails(e.target.value)} />
                
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>
<h3>To generate resume pdf click here:</h3>
    <button onClick={() => {
      window.open("https://resume-mern.onrender.com/p-pdf/resume", "_blank");
    }}>Print Resume</button>
        
    <h3><a href="https://resume-mern.onrender.com/resume.pdf" target="_blank">View Resume</a></h3>

        </>
    );
}
export default ExpAdd;