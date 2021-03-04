const initState = {
    authError: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type)
    {
        case 'LOGIN_SUCCESS':
            console.log('Login successful')
            return{
                ...state,
                authError: null
            }

        case 'LOGIN_ERROR':
            console.log('Login failed')
            return {
             ...state,
             authError: 'Login Failed'
            }

        case 'SIGNOUT_SUCCESS':
                console.log('sign out successful')
                    return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup successful')
            return {
                ...state,
                authError: null
               }
        case 'SIGNUP_ERROR':
            console.log('signup Error')
             return {
                 ...state,
                 authError: action.err.message
                 }
        default:
            return state;
    }
}

export default authReducer