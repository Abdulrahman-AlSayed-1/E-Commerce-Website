import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const userInfo=JSON.parse(localStorage.getItem('userInfo')) || {};
    const email=useRef(null)
    const password=useRef(null)
    const navigate=useNavigate();
 
    const validateField = (fieldRef, value, correctValue, emptyMessage, wrongMessage) => {
        if (!value) {
            fieldRef.current.lastElementChild.innerText = emptyMessage;
            fieldRef.current.firstElementChild.classList.add('is-invalid');
        } else if (value !== correctValue) {
            fieldRef.current.lastElementChild.innerText = wrongMessage;
            fieldRef.current.firstElementChild.classList.add('is-invalid');
        } else {
            fieldRef.current.firstElementChild.classList.remove('is-invalid');
            fieldRef.current.lastElementChild.innerText = '';
        }
    };

    const handleInput = (e) => {
        const { type, value } = e.target;
        if (type === 'email') {
            validateField(email, value, userInfo.email, "Please fill this field", "Email is not registered");
        } else if (type === 'password') {
            validateField(password, value, userInfo.password, "Please fill this field", "Password is incorrect");
        }
    };

    const sendToHome = () => {
        validateField(email, email.current.firstElementChild.value, userInfo.email, "Please fill this field", "Email is not registered");
        validateField(password, password.current.firstElementChild.value, userInfo.password, "Please fill this field", "Password is incorrect");

        const noErrors = 
            !email.current.firstElementChild.classList.contains('is-invalid') && 
            !password.current.firstElementChild.classList.contains('is-invalid');

        if (noErrors) {
            setTimeout(() => {
                navigate('/');
            }, 1500);
        }
    };
   
    return ( 
        <div className="container-fluid mt-3 position-relative"  style={{height:"80vh"}}>
            <div className="col-10 col-md-8 col-lg-6 position-absolute top-50 start-50 translate-middle border border-dark border-2 rounded-3 shadow-lg py-4 px-5 bg-body-secondary">
                <h3 className="text-center fw-bold text-decoration-underline">Login</h3>
                <form className="pt-4 row justify-content-center" onSubmit={(e)=>{e.preventDefault()}}>
                    <label ref={email} className="form-label col-md-6">
                        Email Address :
                        <input onChange={handleInput} className='mt-1 shadow bg-body-secondary form-control' placeholder="Enter your Email Address" type="email"/>
                        <p className="invalid-feedback"></p>
                    </label>
                    <label  ref={password} className="form-label col-md-6">
                        Password :
                        <input onChange={handleInput} className="mt-1 shadow bg-body-secondary form-control" placeholder="Enter your Password" type="password"/>
                        <p className="invalid-feedback"></p>
                    </label>
                    <p className="mt-3 text-center">
                        New Here? {" "}
                        <Link to='/register'>Register</Link>
                    </p>
                    <button className="col-6 shadow col-md-3 col-lg-2
                     mt-2 py-2 fw-bold btn btn-dark rounded-3"
                     onClick={sendToHome}>Login</button>
                </form>
            </div>
        </div>
     );
}

export default Login;