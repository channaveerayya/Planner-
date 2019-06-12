import React from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
const ProjectDetails = (props) => {
    console.log(props.project)
    const {project,auth}=props;
   
        if(!auth.uid) 
             return <Redirect to='/login' />
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
        project:singleProject,
        auth:state.fireBaseData.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'project'}
    ])
)(ProjectDetails)
