import { faFacebook,faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
    return ( 
        <footer className="bg-body-secondary border-top border-dark mt-5 py-4 text-center">
            <p className="small fw-bold text-secondary">Abdulrahman Al-Sayed &copy; 2025 , All rights reserved</p>
            <ul className="p-0 d-inline-block">
                <li className="list-inline-item me-0">
                    <a href="https://www.facebook.com/abdelrhman.hani.37/" className="link-primary fs-2" target="_blank" rel="noopener noreferrer"> 
                      <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </li>
                <li className="list-inline-item mx-2">
                    <a href="https://github.com/Abdulrahman-AlSayed-1?tab=repositories" className="link-dark fs-2" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/abdulrahmanal-sayed/" className="link-primary fs-2" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
            </ul>
        </footer>
     );
}

export default Footer;