import './App.css';
import Bio from "./components/bio.js";
import Education from "./components/education.js";
// import Experience from "./components/experience.js";
import ExperienceDb from "./components/experienceDb.js";
// import Interests from "./components/interests.js";
import Skills from "./components/skills.js";
import Cover from "./components/cover.js";
// import Form from "./components/form.js";
import expAdd from "./components/expAdd.js";
import CoverAdd from "./components/coverAdd.js";
// import Honors from "./components/honors.js";
// import Projects from "./components/projects.js";

// print all keys

function App() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const resumeOnlyMode = params.get('resumeonly');
    const coverOnlyMode = params.get('coveronly');



	return (
		<div className="App">
			{!coverOnlyMode && !resumeOnlyMode && (
				<div id="other-body-stuff">
					Hi stuff goes here and there. Everywhere.
            <CoverAdd/> 
            <br/><br/>             
            <ExpAdd/>              
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
                            <Bio/>
                            <Education/>
                            <ExperienceDb/>            
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
