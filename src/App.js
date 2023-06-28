import './App.css';
import Bio from "./components/bio.js";
import BioDb from "./components/bioDb.js";
import Education from "./components/education.js";
import EducationDb from "./components/educationDb.js";
// import Experience from "./components/experience.js";
import ExperienceDb from "./components/experienceDb.js";
// import Interests from "./components/interests.js";
import Skills from "./components/skills.js";
import Cover from "./components/cover.js";
// import Form from "./components/form.js";
import BioAdd from "./components/bioAdd.js";
import ExpAdd from "./components/expAdd.js";
import CoverAdd from "./components/coverAdd.js";
import EduAdd from "./components/eduAdd.js";
// import Honors from "./components/honors.js";
// import Projects from "./components/projects.js";

// print all keys

function App() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const resumeOnlyMode = params.get('resumeonly');
    const coverOnlyMode = params.get('coveronly');
    const inputOnlyMode = params.get('inputonly');



	return (
		<div className="App">
			{!coverOnlyMode && inputOnlyMode && !resumeOnlyMode && (
				<div id="other-body-stuff">
					Hi stuff goes here and there. Everywhere.
            <CoverAdd/> 
            <br/><br/>             
            <BioAdd/>              
            <EduAdd/>              
            <ExpAdd/> 
            <>
            <br/><br/> 
            <h3>To generate resume pdf click here:</h3>
            <button onClick={() => {
              window.open("https://resume-mern.onrender.com/p-pdf/resume", "_blank");
            }}>Print Resume</button>
                
            <h3><a href="https://resume-mern.onrender.com/resume.pdf" target="_blank">View Resume</a></h3>

            </>                         
				</div>
			)}
			<div id="pdf">
                <div class="page">
                    <div class="section row">
                        <h1 class="col"><span class="myname">Cesar Granda</span> </h1>
                        <div class="contact-info col-right">
                            <div>347 . 495 . 4107</div>
                            <div><a href="mailto:info@cgranda.com">info@cgranda.com</a></div>
                            <div><a href="http://cgranda.com">cgranda.com</a></div>
                        </div>
                    </div>
                    
                    {!coverOnlyMode && (
                        <>
                            <BioDb/>
                            <ExperienceDb/>            
                            <EducationDb/>
                            <Skills/>
                        </>
                    )}
                    {coverOnlyMode && (
                    <>
                        <Cover/>
                    </>
                    )}       
                </div>

			</div> 
		</div>
	);
}

export default App;
