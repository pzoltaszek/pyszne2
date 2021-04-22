import React, { useReducer, createContext } from "react";

export const LoginContext = createContext();

const initialLoginState = {login: ''};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return { login: action.login}
        }
        case 'LOGOUT': {
            return { login: ''}
        }
        default:
            throw new Error('Something wrong with login reducer');
    }
}

export const LoginContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialLoginState);

    return <LoginContext.Provider value={[state, dispatch]}>{props.children}</LoginContext.Provider>
}