import { useState, useEffect } from 'react';

function BioDb() {
    const [bio, setbio] = useState([]);
    useEffect(()=> {
      bioMDB()
    }, [])

    const bioMDB = async () => {
        const response = await fetch('https://resume-mern.onrender.com/fetch-bio');

        setbio(await response.json())
    }


    console.log(bio);
    return (
    <div class="section row">
                <h2 class="col">Bio</h2>
                <div class="section-text col-right row">
                	<div class="bio-text">
                        {bio.map(function(e) { return e.bio; }).sort().reverse()[0]}
                    </div>
                </div>
            </div>	
            )
}
export default BioDb;