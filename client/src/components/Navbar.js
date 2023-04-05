import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./style.module.css"
import icon from "./images/icon.png"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary style pt-3 pb-3 pl-4 pr-5 sticky-top">
                <div className="container-fluid" >
                    <img src={icon} alt="icon"  height="48px" width="48px" style={{marginRight:"3px"}}/>
                    <Link className="navbar-brand" to="/">Application</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active p-9" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar