import React, { Component } from 'react';
import './login.css'
import logo from './img/pngformat.png';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            Username : '',
            Password : '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleClick(event) {
        event.preventDefault()
        if (this.state.Username === 'hammad_arif021@hotmail.com' && this.state.Password === '12345678'){
            this.props.history.push('/loading')
        } 
        return 
    }
    render() { 
        return ( 
        <div className="container-login">
        <div className="wrap-login">
            <img src={logo} alt="logo"/>
            <div id="CUTTING_EDGE__SOLUTION__to_all">
							<h2>CUTTING-EDGE<br/>SOLUTION</h2><h1>to all your </h1><h2>HR</h2><h1>needs</h1>
            </div>
            <form className="login-form validate-form">
                <span className="login-form-title">
                    Login
                </span>

                <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" name="Username" placeholder="Username" required onChange = {this.inputChange} ></input>
                </div>

                <div className="wrap-input100 validate-input">
                    <input className="input100" type="password" name="Password" placeholder="Password" required onChange = {this.inputChange}></input>
                </div>
                
                <div className="container-login-form-btn">
                    <button className="login-form-btn" onClick={this.handleClick} >
                        Login
                    </button>
                </div>
            </form>
        </div>
        </div>
        );
    }
}
 
export default Counter;