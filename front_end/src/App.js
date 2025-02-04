import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import ResourcesPage from './pages/ResourcesPage';
import NavBar from "./components/Navbar";

function App() {
    return (
        
        <Router>
             <div>
                <NavBar />
                <div style={{ padding: "20px" }}>
                    <h1>Scroll Down to Test Sticky Navbar</h1>
                    {[...Array(50)].map((_, i) => (
                        <p key={i}>
                            This is some sample text. Scroll to see the navbar effect. Line {i + 1}.
                        </p>
                    ))}
                </div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
            </Routes>
        </Router>
        
    );
}

export default App;
