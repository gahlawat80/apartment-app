import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";


const initialState = {
    email: '',
    authToken: '',
    error: ''
}

export const appContext = createContext(initialState);

export const GlobalState = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    function updateAuthData(email,authToken){
        dispatch({
            type: 'USER_AUTH',
            payload:{email,authToken}
        })
    }
    function authFailed(message){
        dispatch({
            type: 'USER_AUTH_FAIL',
            payload:message
        })
    }
    return <appContext.Provider value={{
        state: {...state},
        updateAuthData,
        authFailed
    }}>
        {children}
    </appContext.Provider>
}