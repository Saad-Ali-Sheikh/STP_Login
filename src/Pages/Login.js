import React from 'react';
import LoginForm  from '../Components/LoginForm/LoginForm'
import Navbar from '../Components/Header/Navbar'
import './Login.css'
function Login()
{
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <LoginForm/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Login;