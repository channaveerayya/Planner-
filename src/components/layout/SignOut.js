import React from 'react'
import { NavLink } from "react-router-dom";


const  SignOut = () =>{
    return (
       <ul className="right">
           <li>
               <NavLink to='/reg'>
                 SignUp
               </NavLink>
           </li>
           <li>
               <NavLink to='/login'>
                  LogIn
               </NavLink>
           </li>
          
       </ul>
    );
}


export default  SignOut
