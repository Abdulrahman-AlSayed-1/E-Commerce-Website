import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [userInfo, setUserInfo] = useState({
            username: null,
            email: null,
            password: null
    });

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate=useNavigate();

    const validateField = (type,fieldRef, value,correctValue, emptyMessage, wrongMessage) => {
        if (!value) {
            fieldRef.current.lastElementChild.innerText = emptyMessage;
            fieldRef.current.firstElementChild.classList.add('is-invalid');
        } else if (!correctValue) {
            fieldRef.current.lastElementChild.innerText = wrongMessage;
            fieldRef.current.firstElementChild.classList.add('is-invalid');
        } else {
            fieldRef.current.firstElementChild.classList.remove('is-invalid');
            fieldRef.current.lastElementChild.innerText = '';
            setUserInfo({...userInfo,[type]:value})
        }
    };

    const handleInput = (e) => {
        const { type, value } = e.target;
        if (type === 'email') {
            validateField('email',email, value, value.includes('@') && value[value.indexOf('@')+1]  ,"Please fill this field", "Email must contain '@' e.g. name@gmail.com");
        } else if (type === 'password') {
            validateField('password',password, value,value.length >= 6, "Please fill this field", "Password must be at least 6 characters long");
        }
        else if (type === 'text'){
            validateField('username',username, value,value.length >= 5 , "Please fill this field", "Username must be at least 5 characters long");
        }
    };
  
    const sendToLogin = () => {
        const emailValue =email.current.firstElementChild.value
        const passwordValue=password.current.firstElementChild.value
        const userNameValue=username.current.firstElementChild.value

        validateField('email', email ,emailValue, emailValue.includes('@') && emailValue[emailValue.indexOf('@')+1]  ,"Please fill this field", "Email must contain '@' e.g. name@gmail.com");
        validateField('password' ,password,passwordValue ,passwordValue.length >= 6, "Please fill this field", "Password must be at least 6 characters long");
        validateField('username',username, userNameValue, userNameValue.length >= 5 , "Please fill this field", "Username must be at least 5 characters long");

        const noErrors = 
            !email.current.firstElementChild.classList.contains('is-invalid') && 
            !password.current.firstElementChild.classList.contains('is-invalid') &&
            !username.current.firstElementChild.classList.contains('is-invalid') ;


        if (noErrors) {
            localStorage.setItem('userInfo',JSON.stringify(userInfo));
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        }
    };

    return ( 
        <div className="container-fluid mt-3 position-relative"  style={{height:"80vh"}}>
            <div className="col-10 col-md-8 col-lg-6 position-absolute top-50 start-50 translate-middle border border-dark border-2 rounded-3 shadow-lg py-4 px-5 bg-body-secondary">
                <h3 className="text-center fw-bold text-decoration-underline">Register</h3>
                <form className="pt-1 row justify-content-center" onSubmit={(e)=>{e.preventDefault()}}>
                    <label ref={username} className="form-label">
                        Username :
                        <input onChange={handleInput} className='form-control shadow
                         bg-body-secondary mt-1' placeholder="Enter Username" type="text"/>
                        <p className="invalid-feedback"></p>
                    </label>
                    <label ref={email} className="form-label col-md-6">
                        Email Address :
                        <input onChange={handleInput} className='form-control shadow bg-body-secondary mt-1' placeholder="Enter your Email Address" type="email"/>
                        <p className="invalid-feedback"></p>
                    </label>
                    <label ref={password} className="form-label col-md-6">
                        Password :
                        <input onChange={handleInput} className="form-control shadow bg-body-secondary mt-1" placeholder="Enter your Password" type="password"/>
                        <p className="invalid-feedback"></p>
                    </label>
                    <p className="mt-3 text-center">
                        Already has an account?  {" "}
                        <Link to='/login'>Login</Link>
                    </p>
                    <button className="col-7 col-md-4 col-lg-3 shadow mt-2 py-2
                     fw-bold btn btn-dark rounded-3" onClick={sendToLogin}>Register</button>
                </form>
            </div>
        </div>
     );
}

export default Register;