import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/authActions";
const  SignIn = (props) =>{
    return (
       <ul className="right">
           <li>
               <NavLink to='/create'>
                   New Project
               </NavLink>
           </li>
           <li>
                <a  onClick={props.logOut}> 
                  Logout
               </a>
           </li>
           <li>
               <NavLink to='/' className='btn btn-floating white black-text'>
                  {props.profile.initials}       
               </NavLink>
           </li>
       </ul>
    );
}
const mapDispatchToProps = (dispatch) => {
    return{
        logOut:()=>dispatch(logOut())
    }
   
}

export default connect(null,mapDispatchToProps) (SignIn)
