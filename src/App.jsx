import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  console.log("app rendered");
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
