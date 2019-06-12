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
        case 'LOGOUT_SUCCESS':
            console.log("logout")
            return state;
        case 'REGISTER_SUCCESS':
            console.log("REGISTER_SUCCESS");
            return {
                ...state,
                authError:null
            }
        case 'REGISTER_ERROR':
            console.log('REGISTER_ERROR',action);
            return{
                ...state,
                authError:action.err
            }
        default :
            return state;
        
    }
   
}

export default authReducer
