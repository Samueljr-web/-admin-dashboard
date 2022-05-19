import React from "react";
import { NavLink } from "react-router-dom";
import { RiArchiveLine, RiHome2Line, RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

function sidebar({ sidebarOpen, setSidebarOpen }) {
    const handleLogout = () => {
        sessionStorage.clear();
        window.location = "/signin";
    };
    return (
        <div
            className={`absolute top-0 ${
                sidebarOpen ? "left-0" : "-left-full"
            }  w-9/12 md:w-7/12 h-screen lg:static bg-white z-10 lg:w-auto lg:col-span-1 lg:block transition-all duration-700 ease-in-out sidebar-container`}
        >
            <div className="flex flex-col fixed w-full shadow-md h-screen">
                <div className="flex flex-col p-5">
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "mt-8 w-52 p-2 flex items-center text-lg rounded-md bg-[#6161F5] text-white"
                                : "mt-8 w-52 p-2 flex items-center text-lg"
                        }
                        onClick={() => setSidebarOpen(false)}
                        to="/"
                    >
                        <RiHome2Line className="text-[1.7rem] mr-2 text-slate-600" />{" "}
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "mt-8 w-52 p-2 flex items-center text-lg  rounded-md bg-[#6161F5] text-white"
                                : "mt-8 w-52 p-2 flex items-center text-lg"
                        }
                        onClick={() => setSidebarOpen(false)}
                        to="/products"
                    >
                        <RiArchiveLine className="text-[1.7rem] mr-2 text-slate-600" />{" "}
                        Products
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "mt-8 w-52 p-2 flex items-center text-lg rounded-md bg-[#6161F5] text-white"
                                : "mt-8 w-52 p-2 flex items-center text-lg"
                        }
                        onClick={() => setSidebarOpen(false)}
                        to="/clients"
                    >
                        <FaUsers className="text-[1.7rem] mr-2 text-slate-600" />{" "}
                        Clients
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "mt-8 w-52 p-2 flex items-center text-lg rounded-md bg-[#6161F5] text-white"
                                : "mt-8 w-52 p-2 flex items-center text-lg"
                        }
                        onClick={() => setSidebarOpen(false)}
                        to="/members"
                    >
                        <MdOutlinePeopleAlt className="text-[1.7rem] mr-2 text-slate-600" />{" "}
                        Members
                    </NavLink>
                </div>

                <div className="absolute bottom-2 flex items-center text-lg left-5 ">
                    <hr />
                    <button
                        className="flex items-center p-2 w-32 mt-2 rounded-sm bg-[#6161F5] text-white "
                        onClick={handleLogout}
                    >
                        <RiLogoutBoxLine /> Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default sidebar;
