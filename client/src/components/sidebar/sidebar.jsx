import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './sidebar.css'

function Sidebar() {
    return (
        <>
            <Nav className="flex-column align-items-center sidebar"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <NavLink to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/movies">Movies</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/pictures">Pictures</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/music">Music</NavLink>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Sidebar;