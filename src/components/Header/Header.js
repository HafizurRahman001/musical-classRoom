import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        fontSize: '18px',
        borderBottom: '1px solid yellow'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-danger nav-section py-3">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold me-5" href="/">
                    <img className="logo" src={logo} alt="" />
                    MUSICAL SCHOOL</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="text-white text-decoration-none me-2 p-1 fs-5" to='/home'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="text-white text-decoration-none me-2 p-1 fs-5" to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="text-white text-decoration-none me-2 p-1 fs-5" to='/services'>
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="text-white text-decoration-none me-2 p-1 fs-5" to='/contact-us'>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex w-50">
                        <input className="form-control me-2" type="search" placeholder="Search Here" aria-label="Search Here" />
                        <button className="btn btn-outline-warning bg-warning text-dark" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;