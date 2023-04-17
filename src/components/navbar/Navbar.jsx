import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { CiSearch } from 'react-icons/ci'
import { RiShoppingBag2Line } from 'react-icons/ri'

const Navbar = () => {
    return (
        <div>
            <div className="nav">
                <div className="logo">
                    <img className='logo-img' src={logo} alt="logo" />
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Entertainers
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div className="dropdown-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Join Community
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div className="button-3">
                    <button id='btn-3'>Post Your Requirement</button>
                </div>
                <div className="search">
                    <CiSearch className='search-logo' />
                </div>
                <div className="bag">
                    <RiShoppingBag2Line className='bag-logo' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
