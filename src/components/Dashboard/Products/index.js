import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [activeProducts, setActiveProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(
                "https://fakerapi.it/api/v1/products?_quantity=30"
            );
            const { data } = await response.json();
            setProducts(data);
            setActiveProducts(data.slice(0, 5));
        };
        getProducts();
    }, []);
    return (
        <div className="w-full">
            <h1 className="text-xl text-slate-800 font-bold p-8 pl-6">
                Top Selling Products
            </h1>
            <table className="w-full">
                <thead className="border ">
                    <tr>
                        <th className="py-4 px-4 text-left text-gray-700">
                            No
                        </th>
                        <th className="py-4 px-4 text-left text-gray-700">
                            Product
                        </th>
                        <th className="py-4 px-4 text-left text-gray-700">
                            Net Price
                        </th>
                        <th className="py-4 px-4 text-left text-gray-700">
                            Taxes
                        </th>
                        <th className="py-4 px-4 text-left text-gray-700">
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
                                <td className="p-4 text-gray-800">{id}</td>
                                <td className="p-4 flex items-center text-gray-800">
                                    <img
                                        className="w-6 h-6 mr-4"
                                        src={image}
                                        alt=""
                                    />
                                    <span>{name}</span>
                                </td>
                                <td className="p-4 text-gray-800">
                                    {net_price}
                                </td>
                                <td className="p-4 text-gray-800">{taxes}</td>
                                <td className="p-4 text-gray-800">{price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="mt-6 flex justify-end w-full pr-4">
                <button className="text-gray-600 flex items-center text-lg ">
                    <MdOutlineNavigateBefore className="text-gray-600 text-3xl mr-2 " />
                    Previous
                </button>
                <button className="px-6 py-2">1</button>
                <button className="px-6 py-2">2</button>
                <button className="px-6 py-2">3</button>
                <button className="px-6 py-2">4</button>
                <button className="px-6 py-2">5</button>
                <button className="px-6 py-2">6</button>
                <button className="bg-[#6161F5] px-6 py-2 mx-2 rounded-md flex items-center">
                    Next <MdOutlineNavigateNext className="ml-2 text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Products;
