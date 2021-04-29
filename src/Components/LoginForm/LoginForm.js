import React,{useState} from 'react';
import './LoginForm.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

// const passwordRegex=RegExp(/?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}/);
function LoginForm() {

    let [Email,SetEmail]=useState(null);
	let [Password,SetPassword]=useState(null);
    let [EmailErr,SetEmailErr]=useState("")
    //let [PasswordErr,SetPasswordErr]=useState("")
	const onEmailChange=(event)=>{
		Email=event.target.value;
		SetEmail(Email);
        EmailErr=emailRegex.test(Email) && Email.length > 0 
        ? "" 
        : "Invalid Email Address"
        SetEmailErr(EmailErr)
	}
	const onPasswordChange=(event)=>{
		Password=event.target.value;
		SetPassword(Password);
	}
    return (
      <div>
        <form>
        <h2 className="text-center mb-5" >Login</h2>
        <div className="form-outline">
            <input onChange={onEmailChange} type="email" id="form1Example1" className="form-control" />
            <label className="form-label" htmlFor="form1Example1">Email address</label>
        </div>
        {EmailErr.length>0 && (
            <span className="errorMessage">{EmailErr}</span>
        )}
        <div className="form-outline mb-4 mt-4">
            <input onChange={onPasswordChange} type="password" id="form1Example2" className="form-control" />
            <label className="form-label" htmlFor="form1Example2">Password</label>
        </div>
        <div className="row mb-4">
            <div className="col d-flex justify-content-center">
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                    />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                </div>
            </div>
            <div className="col">
                <a href="#!">Forgot password?</a>
            </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
    </form>
    </div>
      
    );
  }
  
  export default LoginForm;