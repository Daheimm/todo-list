import React from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import ToDoList from './ToDoList';
import {BrowserRouter as Routes, Route,Navigate } from 'react-router-dom';

import '../../assets/js/scripts.js';
import '../../assets/css/styles.css';

const MasterLayouts = () => {
    return (
        <div className="sb-nav-fixed">
            <NavBar />
      
         <div id="layoutSidenav">
             <div id="layoutSidenav_nav">
                <SideBar/>
          </div>
        </div>
        <div id="layoutSidenav_content">
            <main>
            <ToDoList/>
            </main>
        <Footer/>
    </div>
    </div>
    )
}
export default MasterLayouts;