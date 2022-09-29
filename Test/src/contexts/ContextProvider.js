import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = { chat: false, userProfile: false, Notification: false }

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setisClicked] = useState(initialState);
    const handleClicked = (clicked) => setisClicked({...initialState,[clicked] : true});
    return (<StateContext.Provider value={{ activeMenu, setActiveMenu,isClicked,setisClicked,handleClicked,initialState }}>
        {children}
    </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);