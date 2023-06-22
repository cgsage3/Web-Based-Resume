import { React, useState, useEffect } from 'react';
import parse  from 'react-html-parser';

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const paramCName = params.get('covername');
console.log(paramCName);

function Cover() {
    const [cover, getCover] = useState([]);
    useEffect(()=> {
        coverMDB()
    }, [])

    const coverMDB = async () => {
        const response = await fetch('https://resume-mern.onrender.com/fetch-cover');

        getCover(await response.json())
    }
    console.log(cover);   
    return (
     
        <>
        <div class="section row">
            <div class="section-text col-right row address">
                <div class="col light">
                    <p>Phone: (347) 495-4107 I Email: info@cgranda.com I Address: 48 Liberty Avenue, New Jersey</p>
                </div>
            </div>

            <h2 class="coverletter">Cover Letter</h2>

            <div class="section-text col-right row">
                    <div class="col">
                    </div>
                    <div class="col">                            
                        {cover.map((val) => (
                        <>
                                <div key={val._id}> 
                                {paramCName == val.coverName  && (
                                    <>
                                    <h4>Dear {val.dear},</h4>
                                      {parse(val.letter)}
                                    </>
                                    )
                                }                                    
                                </div>
                        </>
                        ))}               
                    <p>Sincerely,</p>
                    <h4>Cesar Granda</h4>
                    </div>
            </div>
        </div>  

        </>
    )
}
export default Cover;