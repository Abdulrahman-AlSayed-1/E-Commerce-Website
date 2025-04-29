import { useRef } from "react";
import toast from "react-hot-toast";

function ContactForm() {

    const email=useRef(null)
    const password=useRef(null)
    const message=useRef(null)  
    
    const fields={email, password, message}

    const send=()=>{
       let error = false 
       for(const key in fields) 
         if(!fields[key].current.firstElementChild.value){
            fields[key].current.firstElementChild.classList.add("is-invalid");
            error = true
         }
         else 
            fields[key].current.firstElementChild.classList.remove("is-invalid");; 

       !error && toast.success('Message Sent Successfully')     
    }
    return ( 
          <div className="container-fluid mt-3 position-relative"  style={{height:"80vh"}}>
             <div className="col-10 col-md-8 col-lg-6 position-absolute top-50 start-50 translate-middle border border-dark border-2 rounded-3 shadow-lg py-4 px-5 bg-body-secondary">
                    <h3 className="text-center fw-bold text-decoration-underline">Contact Us</h3>
                    <form className="pt-4 row justify-content-center" onSubmit={(e)=>{e.preventDefault()}}>
                       <label ref={fields.email} className="col-md-6 form-label">
                            Email Address :
                            <input className='mt-1 shadow bg-body-secondary form-control' placeholder="Enter your Email Address" type="email"/>
                            <p className="invalid-feedback">This Field is Required</p>
                        </label>
                        <label ref={fields.password} className="form-label col-md-6">
                            Password :
                            <input className="mt-1 shadow bg-body-secondary form-control" placeholder="Enter your Password" type="password"/>
                            <p className="invalid-feedback">This Field is Required</p>
                        </label>
                        <label ref={fields.message} className="form-label">
                            Message :
                            <textarea className="mt-1 shadow bg-body-secondary form-control" style={{resize:"none"}}
                            placeholder="Enter your Message" type="text" rows={4} />
                            <p className="invalid-feedback">This Field is Required</p>
                        </label>
                        <button className="col-6 shadow col-md-3 col-lg-2
                        mt-2 py-2 fw-bold btn btn-dark rounded-3"
                        onClick={send}>Send</button>
                    </form>
                </div>
          </div>
     );
}

export default ContactForm;