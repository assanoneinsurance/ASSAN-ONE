import {React, useState} from 'react'
import { Link } from 'react-router-dom';

const PConfirmation = () => {
    const [paid, setpaid] = useState(false);


    if(paid){
        return (
            <div class="alert alert-success text-end" role="alert">
                <p className='text-start'>We have recieved your payment. 
                Thank you </p>
                <Link to="/personalDetails">
                    <button className='btn btn-primary'>Home</button>
                </Link>
            </div>
        )
    }

    
  return (
    <div className='text-start'>
    
        <h2 className='text-primary mb-5'>Car Insurance New</h2>
        <div className='border p-4 position-relative' >
            <h4 className=''>Confirmation</h4>
            <hr className='w-50 mb-4'/>
            <div className='d-flex justify-content-between mb-3'>
                <p>Insured declared value: </p>
                <p>3,67,679/-</p>
            </div>

            {/* No Claim Bonus */}
            <div className='border px-1 py-2 mb-3 d-flex justify-content-between'>
                <p className='mb-0'>No Claim Bonus: </p>
                <p className='m-0'>25%</p>
            </div>
            
            {/* Premium account */}
            <div className='d-flex justify-content-between mb-3'>
                <p>Premium Account: </p>
                <p>6859/-</p>
            </div>

            {/* Service / GST  */}
            <div className='d-flex justify-content-between mb-3'>
                <p>Service Tax / Gst </p>
                <p>1278/-</p>
            </div>

            {/* Total Premium you pay  */}
            <div className='d-flex justify-content-between mb-3'>
                <p>Total Premium you pay :  </p>
                <p>19,094/-</p>
            </div>
            <div class="form-check ">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                "I hereby confirm that I have read and agree to the Terms & Conditions of Assan One Website"
                </label>
            </div> 
            <div className='d-flex justify-content-end mt-3'>
                <button className='btn btn-primary px-5 text-center float-end' 
                    onClick={() => setpaid(true)}>
                    Click here to pay Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default PConfirmation