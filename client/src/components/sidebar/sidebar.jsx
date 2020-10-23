import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import FaIcon from '../FaIcon/faIcon';
import './sidebar.css'

function Sidebar({ items }) {
    return (
        <>
            <Nav className="flex-column align-items-center sidebar"
                activeKey="/home"
                //onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                {items?.map((item, index) => (
                    <Nav.Item key={item + index} className="m-2">
                    <NavLink to={item.linkTo}>
                        <FaIcon {...item.icon}/>
                        {item.name}
                        </NavLink>
                </Nav.Item>
                ))}
            </Nav>
        </>
    )
}

export default Sidebar;