import React, { useReducer } from "react";
import {GitHubContext} from './githubContext';
import githubReducer from "./githubReducer";

export default function githubState({ children }) {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);
  return ( 
    <GitHubContext.Provider value={{
        
    }}>
        {children}
    </GitHubContext.Provider>
    )
}
