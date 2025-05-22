import React from 'react';
import '../css/Experience.css'
import experienceData from  "../content/experienceData";

export default function Experience() {
    const shapes = ["pentagon", "star", "square","circle", "triangle"]
    console.log(experienceData)
    return (
        <div id="experience-bg">
            <h1>Experience Page</h1>
            <div className="experience-item-rows">
            {experienceData.map((item, index) => (
                <div className="experience-item-row">
                    <div className="shape-and-line">
                        <div className={`shape ${shapes[index]}`}></div>
                        <div className="line"></div>
                    </div>
                    <div>
                        <ExperienceItem
                            key={index}
                            company={item.company}
                            role={item.role}
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

export function ExperienceItem({company, role, startDate, endDate, descriptionArr}) {
    return (
        <div className="experience-item">
            <h3>{company}</h3>
            <h2>{role}</h2>
            <ul>
                {descriptionArr.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <p>{startDate} - {endDate}</p>
        </div>
    )

}