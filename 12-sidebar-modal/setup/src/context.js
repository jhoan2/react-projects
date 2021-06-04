import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

//wrapping the entire app in this 
//always make sure to display the children or you won't see anything 
const AppProvider = ({children}) => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);
    const openSidebar = () => {
        setisSidebarOpen(true);
    }
    const closeSidebar= () => {
        setisSidebarOpen(false);
    }
    const openModal = () => {
        setisModalOpen(true);
    }
    const closeModal= () => {
        setisModalOpen(false);
    }
    return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, openSidebar, closeModal, closeSidebar}}>{children}</AppContext.Provider>
}

// custom hook 
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}