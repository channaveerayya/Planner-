import React, { Component } from 'react'

class Login extends Component {
    state={
        email:'',
        password:''
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h5 className="gey-text text-darken-3">
                        LogIn
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn black lighten-1 z-depth-0">
                            LogIn
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default  Login