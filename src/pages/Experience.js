import React from 'react';
import '../css/Experience.css'
import experienceData from  "../content/experienceData";

export default function Experience() {
    const shapes = ["pentagon", "star", "square","circle", "triangle"]
    console.log(experienceData)
    return (
        <div id="experience-bg">
            <h1>(Relevant) Experience Page</h1>
            <div className="experience-item-rows">
            {experienceData.map((item, index) => (
                <div className="experience-item-row">
                    <div className="shape-and-line">
                        <div className={`shape ${shapes[index % shapes.length]}`}></div>
                        <div className="line"></div>
                    </div>
                    <div>
                        <ExperienceItem
                            key={index}
                            graduateDivider={item.graduateDivider}
                            company={item.company}
                            role={item.role}
                            techStack={item.techStack}
                            productLink={item.productLink}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            descriptionArr={item.description}
                        />
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export function ExperienceItem({graduateDivider, company, role, techStack, productLink, startDate, endDate, descriptionArr}) {
    return (
        graduateDivider ?
        <div className="experience-item">
            <h1>WORK EXPERIENCE PRIOR TO GRADUATION:</h1>
        </div> 
        :
        <div className="experience-item">
            <h3>{company}</h3>
            <h2>{role}</h2>
            {techStack && <p>Technologies Used: {techStack}</p>}
            <ul>
                {descriptionArr.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            {productLink && <h3><a href={productLink} target="_blank" rel="noopener noreferrer">CHECK OUT THE RELATED PRODUCT HERE</a></h3>} 
            <br></br>

            <p>{startDate} - {endDate}</p>
        </div>
    )

}