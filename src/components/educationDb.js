import { useState, useEffect } from 'react';

function EducationDb() {
    const [edu, setEdu] = useState([]);
    useEffect(()=> {
      eduMDB()
    }, [])

    const eduMDB = async () => {
        const response = await fetch('https://resume-mern.onrender.com/fetch-edu');

        setEdu(await response.json())
    }
function compare( a, b ) {
  if ( a.year < b.year ){
    return 1;
  }
  if ( a.year > b.year ){
    return -1;
  }
  return 0;
}
edu.sort(compare)

    console.log(edu);
    return (
            <div class="section row">
                <h2 class="col">Education</h2>
                {edu.map((val) => (
                <div key={val._id}>
                <div class="section-text col-right row">
                    <h3>{val.degree} - {val.field}</h3>
                    <div>{val.institution}</div>
                    <div class="row">
                        <div class="col light">{val.address}</div>
                        <div class="col-right light">{val.year}</div>
                    </div>
                </div>
                </div>
                ))}
            </div>
    )
}

export default EducationDb;