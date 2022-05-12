import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import {SignUp, SignIn, ProtectedRoutes} from './components';

function App() {
  return (
     <div>
     <Router>
       <Routes>
         <Route path="/" element={<h2 className="text-center text-red-500">welcome</h2>} />
         <Route path="/signup" element={<SignUp />}/>
         <Route path="/signin" element={<SignIn />}/>

         <Route element={<ProtectedRoutes />}>
            <Route path="/*" element={<Dashboard />}/>
         </Route>
       </Routes>
     </Router>
     </div>
  )
}

export default App;
