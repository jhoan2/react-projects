import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

//wrapping the entire app in this 
//always make sure to display the children or you won't see anything 
const AppProvider = ({children}) => {
    return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

// custom hook 
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}