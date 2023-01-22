import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { EmployeeList, EmployeeForm } from "./components";
import { About } from "./components/About";
import Home from "./components/Home";
import { Services } from "./components/Services";
import "./components/media-queries.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
