import React from 'react'
import { Link } from "react-router-dom";
import SingIn from './SignIn';
import SignOut from './SignOut';
import { connect } from "react-redux";
const  Navbar = (props) =>{
    const {auth,profile}=props
    console.log("navbar-->",auth);
    const links=auth.uid ?  <SingIn profile={profile}/> : <SignOut/>
    return (
        <nav className="nav-wrapper grey darken-3 ">
            <div className="container">
                <Link to ='/' className="brand-logo">
                    Planner
                </Link>
                {
                    links
                }
               
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log("dada",state);
    return{
        auth:state.fireBaseData.auth,
        profile:state.fireBaseData.profile
    }
    
}

export default connect(mapStateToProps)(Navbar)
