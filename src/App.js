import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { SignUp, SignIn, ProtectedRoutes } from "./components";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
