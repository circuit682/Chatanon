// src/components/Layout.jsx
import React from "react";
// import NavBar from "./Navbar";

function Layout({ children }) {
    return (
        <div>
            {/* <NavBar /> */}
            <main style={{ padding: "20px" }}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
