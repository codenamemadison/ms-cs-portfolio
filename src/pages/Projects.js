import React from 'react';
import "../css/Projects.css";
import projectsData from  "../content/projectsData";
import { importAll } from '../utils/importAllImages';

export default function Projects() {
    const imagesImported = importAll(
        require.context('../assets/project_assets', false, /\.(png|jpe?g|svg)$/)
    );
    return (
        <div id="projects-bg">
            <h1>Projects</h1>
            <div className="project-item-rows">
            {projectsData.map((item, index) => (
                <div className="project-item-row">
                    <div>
                        <ProjectItem
                            key={index}
                            projectName={item.projectName}
                            techStack={item.techStack}
                            projectType={item.projectType}
                            description={item.description}
                            imageOne={imagesImported[(item.imageNames)[0].name]}
                            imageOneAltText={imagesImported[(item.imageNames)[0].altText]}
                            imageTwo={imagesImported[(item.imageNames)[1].name]}
                            imageTwoAltText={imagesImported[(item.imageNames)[1].altText]}
                            link={item.link || ""}
                        />
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export function ProjectItem({projectName, techStack, projectType, description, imageOne, imageOneAltText, imageTwo, imageTwoAltText, link}) {
    
    return (
        <div className="project-item">
            <div className="project-image-container">
                <img src={imageOne} alt={imageOneAltText}></img>
                <img src={imageTwo} alt={imageTwoAltText}></img>
            </div>
            <div className="project-text-content">
                {link ? (
                    <a href={link} target="_blank" rel="noreferrer"><h2>{projectName}</h2></a>
                ) : (
                    <h2>{projectName}</h2>
                )}
                <p className="tech-stack-text">Tech & Tools Stack: {techStack}</p>
                <p className="project-type-text">Project Type: {projectType}</p>
                <div className="description-container">
                    <p className="description-header-text">Description:</p>
                    {description.map((para, index) => (
                        <p className="description-text">{para}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}