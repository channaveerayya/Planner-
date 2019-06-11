import React from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
    console.log(props.project)
    const {project}=props;
    if(project)
    {
        const {title,content,authorFname,authorLname,createdAt}=project
        
        return (
            <div className="container section project-details">
                <div className="card  z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                       { title}
                        </span>
                        <p>
                           {content}
                        </p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>
                            Posted by {authorFname} {authorLname} 
                        </div>
                        <div>
                           {createdAt.toDate().toString()} 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (<div>
           <h1> Loading....</h1>
        </div>)
    }
}
const mapStateToProps = (state,ownProps) => {
    const {id}=ownProps.match.params
    const projects=state.fireStoreData.data.project
    const singleProject=projects ? projects[id] :null
    return{
        project:singleProject
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'project'}
    ])
)(ProjectDetails)
