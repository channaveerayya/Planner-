export const createProject = (project) => {
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //make async call to database
        const firestore=getFirestore();
        //getState() return state object
        const profile=getState().fireBaseData.profile;
        const authorId=getState().fireBaseData.auth.uid
        firestore.collection('project').add({
            ...project,
            authorFname:profile.fname,
            authorLname:profile.lname,
            authorId:authorId,
            createdAt:new Date()
        })
        .then(()=>{
            dispatch({
                type:'CREATE_PROJECT',project
            })
        })
        .catch((err)=>{
            dispatch({
                type:'CREATE_PROJECT_ERROR',err
            })
        })
       
    } 
};
