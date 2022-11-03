import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = { chat: false, userProfile: false, Notification: false };

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setisClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentLogin, setLogin] = useState(false);

  const handleClicked = (clicked) => setisClicked({ ...initialState, [clicked]: true });


  return (
    <StateContext.Provider
      value={{
        currentColor,
        setCurrentColor,
        currentLogin,
        setLogin,
        activeMenu,
        setActiveMenu,
        isClicked,
        setisClicked,
        handleClicked,
        initialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
