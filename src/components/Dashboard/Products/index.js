import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [activeProducts, setActiveProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (id) => {
        setCurrentPage(id);
        const from = (id - 1) * 5;
        const to = id * 5;

        setActiveProducts(products.slice(from, to));
    };
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(
                "https://fakerapi.it/api/v1/products?_quantity=30"
            );
            const { data } = await response.json();
            setProducts(data);
            setActiveProducts(data.slice(0, 5));
            setCurrentPage(1);
        };
        getProducts();
    }, []);
    return (
        <div className="w-full overflow-hidden">
            <h1 className="text-md md:text-xl text-slate-800 font-bold p-8 pl-6">
                Top Selling Products
            </h1>
            <table className="w-full">
                <thead className="border ">
                    <tr>
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            No
                        </th>
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            Product
                        </th>
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            Net Price
                        </th>
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700 hidden sm:block">
                            Taxes
                        </th>
                        <th className="p-2 py-4 sm:p-4 text-md text-left text-gray-700">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {activeProducts.map((product, index) => {
                        const { id, name, price, net_price, image, taxes } =
                            product;
                        return (
                            <tr key={id} className="border-b">
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md">
                                    {id}
                                </td>
                                <td className="p-2 py-3 sm:p-4 flex items-center text-gray-800 text-sm md:text-md">
                                    <img
                                        className=" w-5 h-5 sm:w-6 sm:h-6 mr-4"
                                        src={image}
                                        alt=""
                                    />
                                    <span>{name}</span>
                                </td>
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md">
                                    {net_price}
                                </td>
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md hidden sm:block">
                                    {taxes}
                                </td>
                                <td className="p-2 py-3 sm:p-4 text-gray-800 text-sm md:text-md">
                                    {price}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {products.length > 0 && (
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
                    {[1, 2, 3, 4, 5, 6].map((entry) => {
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
                            if (currentPage < 6) {
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

export default Products;
