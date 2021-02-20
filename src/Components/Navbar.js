import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { SidebarData } from "./SidebarData";
import Avatar from './wenzix.png'
import "./Navbar.css";
import { IoMdColorFill } from 'react-icons/io';

function Navbar() {
    return (
        
         <div className="navbar">
             <div className="navbar-profile">
                 <img src={Avatar} className="navbar-profile-img" alt="Gaurav"/>
             </div>
             <div className="navbar-text-profile">
                 <h1>Gaurav Prajapati</h1>
             </div>
             <div className='nav-menu'>
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
                    <div ClassName="navbar-social-icons">
                        <AiIcons.AiFillGithub><Link to="#"/></AiIcons.AiFillGithub>
                        <AiIcons.AiOutlineInstagram/>
                        <AiIcons.AiFillLinkedin/>
                    </div>
            </div>
        
    )
}

export default Navbar;
