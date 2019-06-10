import React, { Component } from 'react'

class Reg extends Component {
    state={
        email:'',
        password:'',
        fname:'',
        lname:''
        
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
                       Registration Here
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
                        <label htmlFor="fname">
                            First Name
                        </label>
                        <input type="text" id="fname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lname">
                            Last Name
                        </label>
                        <input type="text" id="lname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn black lighten-1 z-depth-0">
                            SignUp
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default  Reg