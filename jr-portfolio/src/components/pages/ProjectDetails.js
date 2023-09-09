import React from "react";

export const ProjectDetails = ({
  title,
  description,
  imgUrl,
  githubLink,
  deployLink,
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="project-card">
        <img src={imgUrl} alt={title} className="rounded-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-buttons button-spacing">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="btn ">GitHub</button>
            </a>
          )}

          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              <button className="btn ">Live Demo</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
