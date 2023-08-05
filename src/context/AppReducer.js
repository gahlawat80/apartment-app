export const AppReducer = (state,action)=>{
    switch(action.type){
        case 'USER_AUTH':
            return {...state,email:action.payload.email,authToken:action.payload.authToken}
        case 'USER_AUTH_FAIL':
            return {...state,error:action.payload}
        default:
            return state
    }
}