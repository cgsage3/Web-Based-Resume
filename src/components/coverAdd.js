import { useState } from 'react'
function CoverAdd() {
    const [coverName, setcoverName] = useState("");
    const [dear, setDear] = useState("");
    const [letter, setLetter] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'https://resume-mern.onrender.com/add-cover', {
            method: "post",
            body: JSON.stringify({ coverName, dear, letter}),
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
                <input type="text" placeholder="coverName"
                value={coverName} onChange={(e) => setcoverName(e.target.value)} />
                
                <input type="text" placeholder="dear"
                value={dear} onChange={(e) => setDear(e.target.value)} />
                
                <textarea rows="4" cols="50" type="letter" placeholder="Letter"
                value={letter} onChange={(e) => setLetter(e.target.value)} />
                
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>

        </>
    );
}
export default CoverAdd;