import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title: 'Ressume',
        path:'/ressume',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: 'Skills',
        path:'/skill',
        icon:<FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title: 'QA',
        path:'/qa',
        icon:<IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title: 'Messages',
        path:'/message',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    {
        title: 'About me ',
        path:'/aboutme',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    
]