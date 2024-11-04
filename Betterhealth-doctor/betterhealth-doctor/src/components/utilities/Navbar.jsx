import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import user from "../../assets/Images/user.svg";
import { BiSolidNotification } from "react-icons/bi";
import { PiGearFill } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  const [userData] = useState(JSON.parse(localStorage.getItem('userData')))
  // console.log(userData)
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('userData')
    navigate('/')
  }
  return (
    <div>
      <nav className="hidden bg-[whitesmoke] w-[81vw] lg:w-[91vw] xl:w-[81vw] h-20 fixed top-20 md:top-0  lg:top-0 z-50 px-5 lg:px-5 lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between w-72">
          <button className="w-11 h-11 bg-primary2 rounded-lg">
            <IoMenu className="text-2xl mx-auto text-primary" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex justify-center flex-col">
            <h1 className="text-indigo-500 font-bold text-sm lg:text-base w-[70px] lg:w-auto">
              {userData.firstname} {userData.lastname}
            </h1>
            <p className="text-end font-thin text-[10px]">ADMIN</p>
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10  bg-indigo-300 rounded-md">
            <img src={user} alt="" className="rounded-md" />
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleLogOut}>
            <RiLogoutCircleLine className="text-2xl text-orange-400" />
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center">
            <BiSolidNotification className="text-2xl text-blue-400" />
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center">
            <PiGearFill className="text-2xl text-pink-300" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
