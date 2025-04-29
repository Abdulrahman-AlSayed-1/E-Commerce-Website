import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function PageNotFound() {
    return ( 
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{height:"80vh"}}>
           <h2 className="display-5 py-4">404: Page Not Found</h2>
           <Link className="btn btn-outline-dark
            border border-2 border-secondary px-3 py-2" to={'/'}>
             <FontAwesomeIcon icon={faArrowLeft} className="me-2"/>
             Go Back to Home
           </Link>
        </div>
     );
}

export default PageNotFound;