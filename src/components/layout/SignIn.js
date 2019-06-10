import React from 'react'
import { NavLink } from "react-router-dom";

const  SignIn = () =>{
    return (
       <ul className="right">
           <li>
               <NavLink to='/create'>
                   New Project
               </NavLink>
           </li>
           <li>
               <NavLink to='/'>
                  Logout
               </NavLink>
           </li>
           <li>
               <NavLink to='/' className='btn btn-outline-info white black-text'>
                    Channu          
               </NavLink>
           </li>
       </ul>
    );
}

export default SignIn
