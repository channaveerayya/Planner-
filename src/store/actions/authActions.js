export const logIn = (credentials) => {
    
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
            .then(()=>{
                dispatch({type:'LOGIN_SUCCESS'})
            })
            .catch((err)=>{
                dispatch({type:'LOGIN_ERROR',err})
            })
    }
    
};

export const logOut = () => {
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut()
            .then(()=>{
                dispatch({type:'LOGOUT_SUCCESS'})
            })
    }
    
}

export const reg = (newUser) => {
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        const {email,password,fname,lname}=newUser;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
               fname:fname,
               lname:lname,
               initials:fname[0]+lname[0]
            })
        })
        .then(()=>{
            dispatch({type:'REGISTER_SUCCESS'})
        })
        .catch(err=>{
            dispatch({type:'REGISTER_ERROR',err:err.message})
           
        })
    }
}
