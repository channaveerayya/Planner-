const initState={
    authError:null
}

const authReducer = (state=initState,action) => {
    switch(action.type)
    {
        case 'LOGIN_ERROR':
                console.log("error")
            return {
                ...state,
                authError:'LOGIN FAILED'
            }
        case 'LOGIN_SUCCESS':
            console.log("LOGIN_SUCCESS")
            return {
                    ...state,
                    authError:null
            }
        default :
            return state;
        
    }
   
}

export default authReducer
