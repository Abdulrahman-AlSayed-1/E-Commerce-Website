import logo from '../assets/E-Commerce_Logo.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  const activeStyle = ({ isActive }) => {
    return isActive ? { fontWeight:'bold'} : {};
  }
  const totalItems= useSelector((state) => state.totalItems);
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary bg-opacity-75  sticky-top" style={{fontFamily:'monospace'}}>
            <div className="container">
                <NavLink className="navbar-brand col-3" to="/">
                  <img 
                  src={logo}
                  alt="Logo" 
                  height={60}
                  width={60}/>
                  <strong>E-Commerce</strong>
                </NavLink>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-items-center" id="collapsibleNavbar">
                  <ul className="navbar-nav flex-row justify-content-evenly mt-3 mt-md-0 mx-auto">
                      <li className="nav-item">
                        <NavLink style={activeStyle} className="nav-link" to="/">Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink style={activeStyle} className="nav-link" to="/products">Products</NavLink>               
                      </li>
                      <li className="nav-item">
                        <NavLink style={activeStyle} className="nav-link" to="/about">About</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink style={activeStyle} className="nav-link" to="/contact">Contact</NavLink>
                      </li>
                  </ul>
                  <div className='text-center mt-3 mt-md-0'>
                    
                        <NavLink className="btn btn-outline-dark border border-dark border-2" to="/login">
                         <FontAwesomeIcon className='me-2' icon={faRightToBracket} /> 
                          Login
                        </NavLink>
                   
                        <NavLink className="btn btn-outline-dark border border-dark border-2 m-1 mx-md-3 " to="/register">
                          <FontAwesomeIcon className='me-2' icon={faUserPlus} /> 
                          Register
                        </NavLink>
                   
                        <NavLink className="btn btn-outline-dark border border-dark border-2" to="/cart">
                          <FontAwesomeIcon className='me-2' icon={faCartShopping} />
                          Cart({totalItems})
                        </NavLink>

                  </div>
                </div>
            </div>
       </nav>
     );
}
export default Navbar;

