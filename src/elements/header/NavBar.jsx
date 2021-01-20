import React from 'react'
import { Nav, Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import SLogo from '../../sajek-logo.png'

export const NavBar = () => {
    return (
        <>
            <div className="header-navbar-area">
            {/* <!-- sm megamenu start here --> */}
                <Nav id="smmNavbar" className="navbar sm-navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><Image src={SLogo}/></Link>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </Button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li><Link to="/">Home</Link></li>
                                <li className="nav-item has-menu-item-submenu"><Link to="/">Sajek Sport</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about-us">Sajek Vally</Link></li>
                                        <li><Link to="/about-us">Sajek Hill</Link></li>
                                        <li><Link to="/about-us">Sajek Hallypad</Link></li>
                                        <li><Link to="/about-us">Sajek Resort</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about-us">About Sajek</Link></li>
                                <li><Link to="/contact-us">Resorts</Link></li>
                                <li><Link to="/contact-us">Sajek Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </Nav>
            </div>
        </>
    )
}