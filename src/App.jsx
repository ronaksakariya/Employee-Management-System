import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  console.log("app rendered");
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/emp" element={<EmployeeDashboard />} />
          <Route path="/adm" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
