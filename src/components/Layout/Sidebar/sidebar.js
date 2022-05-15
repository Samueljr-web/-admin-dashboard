import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'

function sidebar() {
  const handleLogout = () => {
    window.location = "/signup"
  }
  return (
    <div>
      <div className="flex flex-col w-72 shadow-md h-screen">
        <div className="flex flex-col p-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mt-8 p-2 flex items-center text-lg rounded-md bg-[#6161F5] text-white"
                : "mt-8 p-2 flex items-center text-lg"
            }
            to="/"
          >
            <MdHome className="text-[1.7rem] mr-2 text-slate-600" /> Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mt-8 p-2 flex items-center text-lg  rounded-md bg-[#6161F5] text-white"
                : "mt-8 p-2 flex items-center text-lg"
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mt-8 p-2 flex items-center text-lg rounded-md bg-[#6161F5] text-white"
                : "mt-8 p-2 flex items-center text-lg"
            }
            to="/clients"
          >
            <FaUsers className="text-[1.7rem] mr-2 text-slate-600" /> Clients
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mt-8 p-2 flex items-center text-lg rounded-md bg-[#6161F5] text-white"
                : "mt-8 p-2 flex items-center text-lg"
            }
            to="/members"
          >
            <FaUsers className="text-[1.7rem] mr-2 text-slate-600" /> Members
          </NavLink>
        </div>

        <div className="absolute bottom-2 flex items-center text-lg left-5 ">
          <hr />
          <button
            className="p-2 w-32 mt-2 rounded-sm bg-[#6161F5] text-white "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default sidebar