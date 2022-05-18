import React, { useState, useEffect } from "react";
import { Sidebar, Topbar } from "../components/Layout";
import { Routes, Route } from "react-router-dom";
import { Home, Members, Products, Clients } from "../components/Dashboard";

function Dashboard() {
    const [greetings, setGreetings] = useState();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    let today = new Date();
    let time = today.getHours();

    useEffect(() => {
        if (time < 12) {
            setGreetings("Good Morning");
        } else if (time < 18) {
            setGreetings("Good Afternoon");
        } else {
            setGreetings("Good Evening");
        }
    }, [time]);
    useEffect(() => {
        const handleWindowClick = (e) => {
            const targ = e.target;
            let closest = targ.closest(".sidebar-container");
            if (!closest) {
                if (!targ.classList.contains("hamburger-menu")) {
                    setSidebarOpen(false);
                }
            }
        };
        window.addEventListener("click", handleWindowClick);
        return () => {
            return window.removeEventListener("click", handleWindowClick);
        };
    }, []);

    let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    return (
        <div className="">
            <div className="grid grid-cols-4">
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <div className="col-span-4 lg:col-span-3 h-screen ">
                    <Topbar
                        greeting={greetings}
                        adminDetails={adminDetails}
                        setSidebarOpen={setSidebarOpen}
                    />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/members" element={<Members />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/clients" element={<Clients />} />
                        <Route
                            path="*"
                            element={<h1>Page does not exits</h1>}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
