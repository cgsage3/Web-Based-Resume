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
    // numArray.sort(function(a, b) {
    //   return a - b;
    // });    
    function split(v){
        var x = v[0].split('./').filter(r => r !== '')
        // console.log(x)
        return x
    }
// let objSorted = {}

// name.forEach(function(item){
//     let newN=Number(item.year.substring(0,4));
// console.log(newN);
//     objSorted[item[0]]=item[1]
// })

function compare( a, b ) {
  if ( a._id < b._id ){
    return 1;
  }
  if ( a._id > b._id ){
    return -1;
  }
  return 0;
}
name.sort(compare)
console.log(name);
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