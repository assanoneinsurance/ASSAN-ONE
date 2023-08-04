import React from 'react'
import ASSANONELOGO from '../assets/ICONS/ASSANONELOGO.png'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../redux/authSlice'

const Navbar = () => {

    const naviagte = useNavigate();
    const dispatch = useDispatch();

    const {isLoggedIn} = useSelector((state) => state.user);

    const handleLogout = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        dispatch(reset());
        naviagte('/');
    }


  return (
    <>
        <nav class="navbar navbar-expand-sm bg-white fixed-top ">
            <div class="container d-flex justify-content-between" >
                <div>
                <h5> <a href="/"><img src={ASSANONELOGO} className="navbar-brand img-fluid" href="#" alt='logo' style={{width: "15rem"}}/> </a>  </h5>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                </div>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mx-3">
                        <h5><a href='/' className="nav-link active" aria-current="page">Home</a></h5>
                        </li>
                        <li className="nav-item mx-3">
                        <h5><a className="nav-link" href="#">Help</a></h5>
                        </li>
                        <li className="nav-item mx-3">
                        <h5> <a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass"></i></a></h5>
                        </li>
                        <li className="nav-item mx-2">
                        <div class="dropdown">
                            <button class="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                My Account
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link class="dropdown-item" to="/myAccount">
                                        <p>
                                            Profile
                                        </p>
                                    </Link>
                                </li>
                                <li><Link class="dropdown-item" to="/" onClick={handleLogout}>Logout</Link></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </div>
                           
                        </li>
                    </ul>

                </div>
            </div>
            <hr />
        </nav>

    </>
  )
}

export default Navbar