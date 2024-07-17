import ProjectList from "../project-list/projectlist";
import { data } from "../../techstack/portfoliodata";
import "./projects.css";

export default function Projects() {

    return (
        <div>
            <h1 className="project-title">My Work</h1>
            <div className="main-container">
                {
                    data.map(project => (
                        <ProjectList 
                            imageUrl={project.imageUrl}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            link={project.link}  />
                    ))
                }
            </div>
        </div>
        
    );
}