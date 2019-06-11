export const createProject = (project) => {
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //make async call to database
        const firestore=getFirestore();
        firestore.collection('project').add({
            ...project,
            authorFname:'channu',
            auhtorLname:'BS..',
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
