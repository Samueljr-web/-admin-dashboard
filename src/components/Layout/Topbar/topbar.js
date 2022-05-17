import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar } from "../../../assets";
function topbar({ greeting, adminDetails }) {
    console.log(adminDetails);
    return (
        <div className="flex items-center justify-between h-16 w-full shadow px-10">
            <h2 className="text-lg font-medium">{greeting}</h2>
            <nav className="flex items-center justify-end w-1/4">
                <IoMdNotificationsOutline className="text-2xl" />
                <div className="flex items-center justify-center ml-6 ">
                    <img
                        src={Avatar}
                        alt=""
                        className="h-6 w-6 border border-blue-400 rounded-full"
                    />
                    <span className="text-blue-500 ml-2 font-bold">
                        {adminDetails?.name}
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default topbar;
