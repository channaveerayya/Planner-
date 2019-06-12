import React from 'react'
import { Link } from "react-router-dom";
import SingIn from './SignIn';
import SignOut from './SignOut';
import { connect } from "react-redux";
const  Navbar = (props) =>{
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
const mapStateToProps = (state) => {
    return{

    }
    
}

export default connect(mapStateToProps)(Navbar)
