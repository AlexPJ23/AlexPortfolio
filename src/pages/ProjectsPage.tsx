import React from "react"; 
import ProjectCard from "../components/ProjectCard";
import projects from "../routes/ProjectsRoute";

const ProjectsPage : React.FC = () => {

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'>Projects</h1>
            <div className='grid grid-cols-2 md:grid-cols-2 md:grid-cols-3 gap-4 pl-4'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} Title={project.title} Description={project.description} Tech_Stack={project.tech_stack} Img={project.img} Link={project.link} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage;