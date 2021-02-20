import React from 'react'
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title: 'Skills',
        path:'/skill',
        icon:<RiIcons.RiUserStarFill/>,
        cName:'nav-text'
    },
    {
        title: 'TimeLine',
        path:'/experience',
        icon:<GiIcons.GiPlayerTime/>,
        cName:'nav-text'
    },
    {
        title: 'About',
        path:'/about',
        icon:<FcIcons.FcAcceptDatabase/>,
        cName:'nav-text'
    },
    {
        title: 'Ressume',
        path:'/ressume',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
]