import React from 'react'

const ProjectSummery = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey text-darken-3 black-text">
                    <span className="card-title ">
                       {project.title}
                    </span>
                    <p>posted by</p>
                    <p className="white-text">
                        3 sep 2019
                    </p>
                </div>
        </div>
    )
}

export default ProjectSummery
