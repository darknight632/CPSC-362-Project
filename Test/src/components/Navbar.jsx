import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="ButtomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray "
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, handleClicked } =
    useStateContext();
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex p-2 justify-between md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color="black"
        icon={<AiOutlineMenu />}
      />
      <div className="flex ">
        <NavButton
          title="User Profile"
          customFunc={() => handleClicked('userProfile')}
          icon={<CgProfile />}
        />

        {isClicked.userProfile && (<UserProfile/>)}
      </div>
    </div>
  );
};

export default Navbar;
