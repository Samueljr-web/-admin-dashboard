import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [activeClients, setActiveClients] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (id) => {
        setCurrentPage(id);
        const from = (id - 1) * 5;
        const to = id * 5;

        setActiveClients(clients.slice(from, to));
    };
    useEffect(() => {
        const getClients = async () => {
            const response = await fetch(
                "https://fakerapi.it/api/v1/persons?_quantity=10"
            );
            const { data } = await response.json();
            setClients(data);
            setActiveClients(data.slice(0, 5));
            setCurrentPage(1);
        };
        getClients();
    }, []);
    return (
        <div className="w-full">
            <h1 className="text-md md:text-xl text-slate-800 font-bold p-8 pl-6">
                Clients Information
            </h1>
            <table className="w-full" style={{overflowX:"scroll"}}>
                <thead className="border ">
                    <tr>
                    <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            No
                        </th>
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            Full Name
                        </th>
                        
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            Email
                        </th>
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            Phone Number
                        </th>
                        
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            Gender
                        </th>
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            Image
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {activeClients.map((client, index) => {
                        const { id, firstname, email, phone, gender, image } =
                            client;
                        return (
                            <tr key={id} className="border-b" >
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md">
                                    {id}
                                </td>
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md">
                                    {firstname}
                                </td>
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md ">
                                    {email}
                                </td>
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md">
                                    {phone}
                                </td>
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md">
                                    {gender}
                                </td>
                                <td className="p-2 py-3 sm:p-4 flex items-center text-gray-800 text-sm md:text-md">
                                    <img
                                        className=" w-5 h-5 sm:w-6 sm:h-6 mr-4"
                                        src={image}
                                        alt=""
                                    />
                                    
                                </td>
                                
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {clients.length > 0 && (
                <div className=" mt-8 mb-4 md:mt-6 flex justify-center sm:justify-end w-full pr-4 items-center">
                    <button
                        className="text-gray-600 flex items-center text-md md:text-lg mr-4 hidden sm:flex"
                        onClick={() => {
                            if (currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                                changePage(currentPage - 1);
                            }
                        }}
                    >
                        <MdOutlineNavigateBefore className="text-gray-600 text-2xl md:text-3xl mr-2 " />
                        Previous
                    </button>
                    {[].map((entry) => {
                        return (
                            <button
                                className={`text-md h-8 w-8 md:h-10 md:w-10 mx-1 sm:mx-2 transition duration-1000 rounded-full ${
                                    currentPage === entry
                                        ? "bg-[#6161F5]"
                                        : "hover:bg-gray-300"
                                }`}
                                key={entry}
                                onClick={() => {
                                    changePage(entry);
                                }}
                            >
                                {entry}
                            </button>
                        );
                    })}

                    <button
                        className="bg-[#6161F5] text-md px-2 py-1 sm:px-4 sm:py-2 md:text-lg md:px-6 md:py-2 mx-2 rounded-md items-center hidden sm:flex"
                        onClick={() => {
                            if (currentPage < 2) {
                                setCurrentPage(currentPage + 1);
                                changePage(currentPage + 1);
                            }
                        }}
                    >
                        Next <MdOutlineNavigateNext className="ml-2 text-2xl" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Clients;
