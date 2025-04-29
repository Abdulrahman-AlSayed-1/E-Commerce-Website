function BillingAddress() {
    return ( 
        <div className="col-10 col-lg-8 mx-auto">
            <table className="table" border={1}>
                <thead className="table-secondary">
                <tr>
                    <th className="lead">Billing Address</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="d-flex flex-wrap"> {/* prevented using row class because it has unwanted negative margins and padding */ }
                            <label className="col-12 col-md-6 px-2 form-label">
                                First Name:
                                <input type="text" placeholder="e.g. Abdulrahman" className="form-control shadow mt-2" required/>
                                <div className="valid-feedback">Valid First Name</div>
                                <div className="invalid-feedback">Invalid First Name</div>
                            </label>
                            <label className="col-12 col-md-6 px-2 form-label">
                                Last Name:
                                <input type="text" placeholder="e.g. Al-Sayed" className="mt-2 form-control shadow" required/>
                                <div className="valid-feedback">Valid Last Name</div>
                                <div className="invalid-feedback">Invalid Last Name</div>
                            </label>
                        </td>
                    </tr>
                    <tr>
                       <td>
                            <label className="col-12 px-2 form-label">
                                Email:
                                <input type="text" placeholder="e.g. name123@gmail.com" className="mt-2 form-control shadow" required/>
                                <div className="valid-feedback">Valid Email Address</div>
                                <div className="invalid-feedback">Invalid Email Address</div>
                            </label>
                        </td> 
                    </tr>
                    <tr>
                       <td className="d-flex flex-wrap">
                            <label className="col-12 col-md-6 px-2 form-label">
                                Address:
                                <input type="text" placeholder="e.g. 1234 Main St" className="mt-2 form-control shadow" required/>
                                <div className="valid-feedback">Valid Address</div>
                                <div className="invalid-feedback">Invalid Address</div>
                            </label>
                            <label className="col-12 col-md-6 px-2 form-label">
                                Address 2
                                <small className="text-secondary"> (Optional):</small>
                                <input type="text" placeholder="e.g. Apartment or suite" className="mt-2 form-control shadow"/>
                                <div className="valid-feedback">Valid Address</div>
                                <div className="invalid-feedback">Invalid Address</div>
                            </label>
                        </td> 
                    </tr>
                    <tr>
                       <td className="d-flex flex-wrap">
                            <label className="col-12 col-md-4 px-2 form-label">
                                Country:
                                <select type="text"  className="mt-2 form-control shadow" required>
                                    <option value="Choose..." hidden>Choose...</option>
                                    <option value="USA" >USA</option>
                                </select>
                                <div className="valid-feedback">Valid Country</div>
                                <div className="invalid-feedback">Invalid Country</div>
                            </label>
                            <label className="col-12 col-md-4 px-2 form-label">
                                State:
                                <select type="text"  className="mt-2 form-control shadow" required>
                                    <option value="Choose..." hidden>Choose...</option>
                                    <option value="Florida" >Florida</option>
                                    <option value="New York" >New York</option>
                                </select>
                                <div className="valid-feedback">Valid State</div>
                                <div className="invalid-feedback">Invalid State</div>
                            </label>
                            <label className="col-12 col-md-4 px-2 form-label">
                                 Zip:
                                <input type="text" placeholder="e.g. 1234" className="mt-2 form-control shadow"/>
                                <div className="valid-feedback">Valid Zip number</div>
                                <div className="invalid-feedback">Invalid Zip number</div>
                            </label>
                        </td> 
                    </tr>
                </tbody> 
            </table>
            <table className="table" border={1}>
               <thead>
                 <tr>
                    <th className="lead fw-bold">Payment</th>
                 </tr>
               </thead>
               <tfoot>
                    <tr>
                      <td className="d-flex justify-content-center">
                        <button className="btn btn-dark rounded-3 col-12 col-md-6" disabled>
                            <span className="lead text-light">Continue to Checkout</span>
                        </button>
                      </td>
                    </tr>
               </tfoot>
               <tbody>
                <tr>
                    <td className="d-flex flex-wrap"> 
                        <label className="col-12 col-md-6 px-2 form-label">
                                Name on Card:
                                <input type="text" placeholder="e.g. ABDULRAHMAN HANI...etc" className="form-control shadow mt-2" required/>
                                <small className="text-muted">Full Name as Displayed on Card</small>
                                <div className="valid-feedback">Valid Name</div>
                                <div className="invalid-feedback">Invalid Name</div>
                        </label>
                        <label className="col-12 col-md-6 px-2 form-label">
                                Credit Card Number:
                                <input type="text" placeholder="e.g. 1234 5678 9012 3456" className="mt-2 form-control shadow" required/>
                                <div className="valid-feedback">Valid card number</div>
                                <div className="invalid-feedback">Invalid card number</div>
                       </label>
                    </td>
                </tr>
                <tr>
                   <td className="d-flex flex-wrap">
                       <label className="col-12 col-md-6 px-2 form-label">
                               Expiration Date:
                                <input type="date" className="form-control shadow mt-2" required/>
                                <div className="valid-feedback">Valid Date</div>
                                <div className="invalid-feedback">Invalid Date</div>
                        </label>
                        <label className="col-12 col-md-6 px-2 form-label">
                                CVV:
                                <input type="text" placeholder="e.g. 123 or 1234" className="mt-2 form-control shadow" required/>
                                <div className="valid-feedback">Valid CVV</div>
                                <div className="invalid-feedback">Invalid CVV</div>
                       </label>
                    </td>
                </tr>
               </tbody>
            </table>
        </div>
     );
}

export default BillingAddress;