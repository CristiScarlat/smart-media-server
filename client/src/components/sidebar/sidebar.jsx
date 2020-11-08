import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from 'react-router-dom';
import FaIcon from '../faIcon/faIcon';
import './sidebar.css'

function Sidebar({ items, className, selectedItem, ...rest }) {
    const location = useLocation()
    console.log(rest, location)
    return (
        <>
            <Nav className={`flex-column align-items-center sidebar ${className}`} >
                {items?.map((item, index) => (
                    <Nav.Item key={item + index} className={`sidebar-item ${location?.pathname === item.linkTo ? 'selected' : ''} m-2`}>
                        <NavLink to={item.linkTo}>
                            <FaIcon {...item.icon} />
                            {item.name}
                        </NavLink>
                    </Nav.Item>
                ))}
            </Nav>
        </>
    )
}

export default Sidebar;