import educationContent from "../data/education";

const Education = () => (
            <div class="section row">
                <h2 class="col">Education</h2>
                {educationContent.map((val, id) => (
                <div key={id}>
                <div class="section-text col-right">
                    <h3>{val.degree} - {val.details}</h3>
                    <div>{val.institute}</div>
                    <div class="row">
                        <div class="col light">{val.location}</div>
                        <div class="col-right light">{val.year}</div>
                    </div>
                </div>
                </div>
                ))}
            </div>	
);
export default Education;