import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Avatar } from "../../../assets";
function topbar({ greeting, adminDetails, setSidebarOpen }) {
    return (
        <div className="flex items-center justify-between h-16 w-full shadow pl-4 pr-10 lg:px-10 ">
            <div className="flex items-center w-1/2 h-full">
                <IoMdMenu
                    className="text-2xl mr-6 cursor-pointer lg:hidden hamburger-menu"
                    onClick={() => setSidebarOpen(true)}
                />
                <h2 className="text-sm md:text-lg font-medium hidden lg:block">
                    {greeting}
                </h2>
            </div>
            <nav className="flex items-center justify-end w-1/4">
                <IoMdNotificationsOutline className="text-2xl" />
                <div className="flex items-center justify-center ml-6 ">
                    <img
                        src={Avatar}
                        alt=""
                        className="h-6 w-6 border border-blue-400 rounded-full"
                    />
                    <span className="text-blue-500 ml-2 font-bold hidden sm:block">
                        {adminDetails?.name}
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default topbar;
