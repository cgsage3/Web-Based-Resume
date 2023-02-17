import './App.css';
import Education from "./components/education.js";
import Experience from "./components/experience.js";
// import Interests from "./components/interests.js";
import Skills from "./components/skills.js";
// import Honors from "./components/honors.js";
// import Projects from "./components/projects.js";

// print all keys

function App() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const resumeOnlyMode = params.get('resumeonly');


	return (
		<div className="App">
			{!resumeOnlyMode && (
				<div id="other-body-stuff">
					Hi stuff goes here and there. Everywhere.
				</div>
			)}
			<div id="pdf">
        <div class="page">
            <div class="section row">
                <h1 class="col"><span class="myname">Cesar Granda</span> </h1>
                <div class="contact-info col-right">
                    <div>201 . 920 . 0729</div>
                    <div><a href="mailto:info@cgranda.com">info@cgranda.com</a></div>
                    <div><a href="http://cgranda.com">cgranda.com</a></div>
                </div>
            </div>

            <div class="section row">
                <h2 class="col">Bio</h2>
                <div class="section-text col-right row">
                	<div>I am a web developer with 8+ years of experience in front-end and back-end development I employ many languages and frameworks. I am Passionate about building excellent web applications utilizing innovative and cutting-edge solutions.</div>
                </div>
            </div>
            
            <Skills />
            <Education/>
            <Experience/>            


        </div>
			</div>
		</div>
	);
}

export default App;
