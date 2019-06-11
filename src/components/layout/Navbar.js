import React from 'react'
import { Link } from "react-router-dom";
import SingIn from './SignIn';
import SignOut from './SignOut';
const  Navbar = () =>{
    return (
        <nav className="nav-wrapper grey darken-3 ">
            <div className="container">
                <Link to ='/' className="brand-logo">
                    Planner
                </Link>
                <SingIn/>
                <SignOut/>
            </div>
        </nav>
    )
}

export default Navbar
