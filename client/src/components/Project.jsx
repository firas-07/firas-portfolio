import { useMemo } from "react";
import { projects } from "./projects";
import './Projects.css'; // Assuming your custom styles will be here

const Project = () => {
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => project.category !== 'android').slice(0, 10);
  }, [projects]);

  return (
    <section className="work" id="work">
      <div className="box-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-20 gap-10 m-5">
        {filteredProjects.map((project, index) => (
          <div
            className="box tilt shadow-gray-600 rounded-xl shadow-3xl relative my-5"
            key={index}
          >
            <img draggable="false" src={project.image} alt="project" className="project-img w-full h-auto rounded-t-xl" />
            {/* The content is initially hidden and shown on hover */}
            <div className="content hidden-on-hover p-4">
              <div className={`tag text-center p-1 start-page text-white ${project.style}`}>
                <h3 className="text-lg font-bold">{project.name}</h3>
              </div>
              <div className="desc mt-3">
                <p className="text-sm ">{project.desc}</p>
                <div className="flex justify-center m-5 mt-5">
                  <div className="btns flex gap-2 items-center">
                    <a
                      href={project.links.view}
                      className="btn start-page text-white p-2 px-4 rounded-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name}`}
                    >
                      <i className="fas fa-eye"></i> View
                    </a>
                    <a
                      href={project.links.code}
                      className="btn start-page text-white p-2 px-4 rounded-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View Code for ${project.name}`}
                    >
                      Code <i className="fas fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
