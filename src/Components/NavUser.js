import { NavLink, Switch, Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from 'react';
import Login from '../Login';
import Home from '../Home';


const NavUser = () => {
    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <Login/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
            </Routes>

        </Router>
    );
};

export default NavUser;
