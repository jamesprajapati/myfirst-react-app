import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { SidebarData } from "./SidebarData";
import Avatar from './wenzix.png'
import "./Navbar.css";

function Navbar() {
    const [sidebar,setSidebar]= useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
         <div className="navbar">
         <div className='nav-menu active'>
             <div className="nav-profile">
                 <img src={Avatar} className="nav-profile-image"alt="Gaurav"/>
                 </div>
                 <div>
                 <h1>Gaurav Prajapati</h1>
                 </div>
             <ul className="nav-menu-items">
                {SidebarData.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span> 
                            </Link>
                        </li>
                    )
                })}
             </ul>
         </div>
         </div>
            
        </>
    )
}

export default Navbar;
