import React from 'react'
import moment from 'moment'

const ProjectSummery = ({project}) => {
   
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey text-darken-5 black-text">
                    <span className="card-title ">
                       {project.title}
                    </span>
                    <p>Posted - {project.authorFname} {project.authorLname}</p>
                    <p className="white-text">
                    {moment(project.createdAt.toDate()).calendar()} 
                    </p>
                </div>
        </div>
    )
}

export default ProjectSummery
