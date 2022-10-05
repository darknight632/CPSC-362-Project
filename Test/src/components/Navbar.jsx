import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Notification, UserProfile} from '.';
import {useStateContext} from  '../contexts/ContextProvider';

const NavButton = ({
  title, customFunc, icon, color, dotColor
}) => (
  <TooltipComponent content={title} position='ButtomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className="relative x-1 rounded-full p-3 hover:bg-light-gray ">
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu,setActiveMenu,isClicked,setisClicked,handleClicked} = useStateContext();
  return (
    <div className='flex p-2 justify-between md: mx-6 relative'>
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="black" icon={<AiOutlineMenu />}/>
      <div className='flex'>
      <TooltipComponent content="Profile" position="BottomCenter">
        <button className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClicked('userProfile')}>
            {<CgProfile size='20px'/>}
        </button>
      </TooltipComponent>
      {isClicked.userProfile && (<UserProfile/>)}
      </div>    
    </div>
  )
}

export default Navbar