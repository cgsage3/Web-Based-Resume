import { useState } from 'react'
function Exp() {
    const [year, setYear] = useState("");
    const [position, setPos] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [details, setDetails] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/add', {
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
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="Year"
                value={year} onChange={(e) => setYear(e.target.value)} />

                <input type="position" placeholder="Position"
                value={position} onChange={(e) => setPos(e.target.value)} />

                <input type="companyName" placeholder="Company Name"
                value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                
                <textarea rows="4" cols="50" type="details" placeholder="Details"
                value={details} onChange={(e) => setDetails(e.target.value)} />
                
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>

        </>
    );
}
export default Exp;