import { useState, useEffect } from 'react';
function ExperienceDb() {
const [name, setName] = useState([]);
useEffect(()=> {
    experienceMDB()
}, [])

const experienceMDB = async () => {
    const response = await fetch('https://resume-mern.onrender.com/xp');

    setName(await response.json())
}
console.log(name);   
function split(v){
    var x = v[0].split('./').filter(r => r !== '')
    console.log(x)
    return x
}
    return (
     
        <>
    <div class="section row">
        <h2 class="col">Experience</h2>         
        <div class="section-text col-right">
        {name.map((val) => (
            <div key={val._id}>
                    <div class="row">
                        <div class="col">
                            <h3>{val.companyName}</h3>
                        </div>
                    </div>
                    <div class="row subsection">
                        <div class="emph col">{val.position}</div>
                        <div class="col-right light">{val.year}</div>
                    </div>
                    <ul class="desc">
                    {split(val.details).map((data) => {
                        return (
                            <li key={data._id}>{data}.</li>
                        )
                    })}
                    </ul>
                </div>      
        ))}
        </div>
    </div>
        </>
    )
}
export default ExperienceDb;