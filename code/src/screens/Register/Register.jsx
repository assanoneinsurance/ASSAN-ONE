import {React, useState} from 'react'

import { Navigate, useNavigate } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/authSlice';
import Spinner from '../../components/Spinner/Spinner';


const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
  
    const { user, loading, error } = useSelector((state) => state.user);

    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here

      console.log('Submitted:', username, email, mobile, password);
      dispatch(registerUser({email, username , password, mobile}));
      
    };


    const goToLogin = () => {
      navigate('/');
    }
  
 
    
    return (
      <div className="container w-50 text-start position-relative">
        <h1 className='text-center mb-5'>Registration Form</h1>
        {loading && <div className='position-absolute' style={{top: "50%", left: "50%"}}>
          <Spinner />
        </div>}
        <form onSubmit={handleSubmit}>
          {/* USERNAME */}
          <div className="form-group">
          <label>UserName:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="tel"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
          { user && <div>
                <p className='text-success'>Succesfully Registered</p> 
                <a onClick={goToLogin} className='text-primary'>Login here</a>
                    </div>}
      </div>
    );
  };

export default Register