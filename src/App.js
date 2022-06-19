// style & depencency
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";

// pages
import Dashboard from "./pages/Dashboard";
import Company from "./pages/Company";
import Employee from "./pages/Employee";
import Customer from "./pages/Customer";
import Fleet from "./pages/Fleet";
import WorksService from "./pages/WorksService";
import Workday from "./pages/Workday";
import Invoices from "./pages/Invoices";
import Quotation from "./pages/Quotation";
import Owner from "./pages/Owner";
import LogHistory from "./pages/LogHistory";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 bg-white">
            <Sidebar />
          </div>
          <div className="col-md-10 bg-light">
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/company" element={<Company />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/works-service" element={<WorksService />} />
              <Route path="/workday" element={<Workday />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/quotation" element={<Quotation />} />
              <Route path="/owner" element={<Owner />} />
              <Route path="/log-history" element={<LogHistory />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
