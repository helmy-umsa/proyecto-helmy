import { Link } from "react-router-dom";
import './Navbar.css';

import logo from '../../assets/images/kiss-logo.png';

export default function Navbar() {
    return (
        <nav>
            <ul className="navbar-items ps-0">
                <li>
                    <Link to="/gene" className="navbar__link">GENE</Link>
                </li>
                <li>
                    <Link to="/paul" className="navbar__link">PAUL</Link>
                </li>
                <li className="dropdown">
                    <Link to="/" className="navbar__link">
                        <img src={logo} alt="" className="navbar__img-logo"></img>
                    </Link>
                    <ul className="sub-items">
                        <li>
                            <Link to="/kisstory" className="navbar__link">KISSTORY</Link>
                        </li>
                        <li>
                            <Link to="/discografia" className="navbar__link">DISCOGRAFÍA</Link>
                        </li>
                        <li>
                            <Link to="/videos" className="navbar__link">VIDEOS</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/peter" className="navbar__link">PETER</Link>
                </li>
                <li>
                    <Link to="/ace" className="navbar__link">ACE</Link>
                </li>
            </ul>
        </nav>
    );
}
