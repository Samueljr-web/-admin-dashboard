import React, {useState, useEffect} from 'react'
import {Sidebar} from '../components/Layout'
import { Routes, Route } from "react-router-dom";
import {Home, Members, Products, Clients} from '../components/Dashboard'

function Dashboard() {
  const [greetings, setGreetings] = useState()
  let today = new Date()
  let time = today.getHours()

useEffect(() => {
  if(time < 12){
    setGreetings("Good Morning");
  }else if(time < 18){
    setGreetings("Good Afternoon");
  }else{
    setGreetings("Good Evening");
  }
}, [time])


  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"))
  return (
    <div className="">   
    <div className="grid grid-cols-2">
          <Sidebar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/products" element={<Products />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="*" element={<h1>Page does not exits</h1>} />
          </Routes>
        </div>
    </div>
  );
}

export default Dashboard