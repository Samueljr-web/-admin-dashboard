import React, { useState, useEffect } from "react";
function Dashboard() {
  const [greetings, setGreetings] = useState();
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

  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  return (
    <div className="grid grid-cols-2">
      <h2 className="font-medium text-center">
        {greetings} <small className="text-blue-500 text-lg">{adminDetails.name}</small>
      </h2>
    </div>
  );
}

export default Dashboard;
