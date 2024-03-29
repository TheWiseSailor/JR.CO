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
        <h3>
          <strong>{title}</strong>
        </h3>
        <p>
          <strong>{description}</strong>
        </p>
        <div className="project-buttons ">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="btn ">
                {" "}
                <strong>GitHub</strong>
              </button>
            </a>
          )}

          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              <button className="btn ">
                <strong>Live Demo</strong>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
//get started on new portfolio
//busy day didnt do it