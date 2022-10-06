import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { userProfileData } from "../data/dummy";

const UserProfile = () => {
  const { currentColor } = useStateContext;
  const navigate = useNavigate();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153,171,180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} onClick={() => {navigate(`/${item.name}`)}} className='flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer'>
            <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className='text-xl rounded-lg p-3 hover:bg-light-gray '>
              {item.icon} 
            </button>
            <div>
              <p className="font-semi-bold"> {item.title} </p>
              <p className="text-gray-500 text-sm"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button color='black' bgColor={currentColor} text="Log Out" borderRadius='10px' width='full' />
      </div>
    </div>
  );
};

export default UserProfile;
