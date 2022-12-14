import React from 'react'
import {useStateContext} from '../contexts/ContextProvider'

const Button = ({bgColor, color, icon, bgHoverColor, size, text, borderRadius, width}) => {
  const {setisClicked, initialState} = useStateContext();
  
  return (
    <button 
      type='button'
      onClick={() => setisClicked(initialState)}  
      style={{backgroundColor: bgColor, color, borderRadius}} 
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button