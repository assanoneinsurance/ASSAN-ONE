import React from 'react'
import { Link } from 'react-router-dom'
const TwoWheelerDetails = () => {
  return (
    <div className='h-75' style={{display:"grid", placeItems: "center"}}>
        <div className="card" style={{width: "80%", height: "80%",display:"grid", placeItems: "center", boxShadow: "6px 4px 5px 0px rgba(219,219,219,1)"}}>
            <div className="card-body">
                <h2 className="card-title"><strong>Enter Your Vehicle Number</strong></h2>
                <p className="card-text">Enter your Number and get OTP to verification</p>
                <div className="input-group mb-3">
                    <input type="number" style={{backgroundColor: "rgba(137, 230, 244, 0.48)"}} className="form-control" 
                            placeholder="MH XX BC XXXX" aria-label="Enter Mobile Number" aria-describedby="basic-addon1" />
                </div>
                <Link to="/tCustomer"><button className=' btn btn-primary w-100'>Next</button></Link>
            </div>
        </div>
    </div>
  )
}

export default TwoWheelerDetails