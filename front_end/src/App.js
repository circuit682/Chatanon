import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import ResourcesPage from './pages/ResourcesPage';
import NavBar from "./components/Navbar";
import ChatIcon from "./components/ChatIcon/ChatIcon";

const AppContent = () => {
    const location = useLocation();
    return (
        <div>
            {location.pathname !== "/login" && <NavBar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
           </Routes>
           {location.pathname !== "/login" && <ChatIcon />}  {/* Conditionally render ChatIcon */}
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
