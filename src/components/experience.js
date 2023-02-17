import experienceContent from "../data/experience";

const Experience = () => (
    <div class="section row">
        <h2 class="col">Experience</h2>	
		<div class="section-text col-right">
	    {experienceContent.map((val, id) => (
			<div key={id}>
					<div class="row">
						<div class="col">
							<h3>{val.compnayName}</h3>
						</div>
					</div>
					<div class="row subsection">
						<div class="emph col">{val.position}</div>
						<div class="col-right light">{val.year}</div>
					</div>
					<ul class="desc">
						{Object.keys(val.details).map((list, i) => (
						    <li key={i}>
						        {val.details[list]}
						    </li>
						))}
					</ul>
				</div>		
	    ))}
	  	</div>
  	</div>
);

export default Experience;					