import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'

import Login from './components/auth/Login'
import Reg from './components/auth/Reg'
 class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                   <Navbar />
                   <Switch>
                       <Route exact path='/' component={Dashboard} />
                       <Route  path='/project/:id' component={ProjectDetails}/>
                       <Route  path='/login' component={Login}/>
                       <Route  path='/reg' component={Reg}/>
                       <Route  path='/create' component={CreateProject}/>
                       
                   </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App
