import React from 'react'
import { Link } from 'react-router-dom'
const PersonalDetails = () => {

  return (
    <div className='text-start'>

<h2 className='text-primary mb-5'>Health Insurance</h2>
       {/* Personal Details */}
       <div className='mb-5'>
          <h4 className='mb-4'>Personal Details</h4>

          {/* Select Title, First Nam & Last Name */}
          <div className='row mb-3 column-gap-1'>
                <div className='col'>
                    <button className="btn border-secondary-subtle dropdown-toggle w-100" type="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                    Select Title
                    </button>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item text-center" href="#">Mr.</a></li>
                    <li><a className="dropdown-item text-center" href="#">Ms.</a></li>
                    </ul>
                </div>
                <div className='col'>
                <input type="text" className="form-control" placeholder="First name" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
                <input type="number" className="form-control" placeholder="Last Name" 
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
                </div>
          
            </div>
          {/* DOB, - & Mobile number */}
          <div className='row mb-3 column-gap-1'>
                <div className='col'>
                    <input type="text" className="form-control" placeholder="Date Of Birth" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
             
                </div>
                <div className='col'>
                <input type="number" className="form-control" placeholder="Mobile Number" 
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
                </div>
            </div>
            {/* Pan Number, Marital Status & Occupation */}
            <div className='row mb-3 column-gap-1'>
                    <div className='col'>
                        <input type="number" className="form-control" placeholder="Pan Number" 
                            aria-label="emailid" aria-describedby="basic-addon2" />                 
                    </div>
                    <div className='col'>
                    <input type="text" className="form-control" placeholder="Martial Status" 
                            aria-label="emailid" aria-describedby="basic-addon2" />                 
                    </div>
                    <div className='col'>
                    <input type="number" className="form-control" placeholder="Occupation" 
                            aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
                    </div>
                </div>
        </div> 



       {/* Nominee Details Details */}
       <div className='mb-5'>
          <h4 className='mb-4'>Nominee Details</h4>

          {/* Select Title, Nominee First Name & Last Name */}
          <div className='row mb-3 column-gap-1'>
                <div className='col'>
                    <button className="btn border-secondary-subtle dropdown-toggle w-100 btn-inside-secondary" type="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Select Title
                    </button>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item text-center" href="#">Mr.</a></li>
                    <li><a className="dropdown-item text-center" href="#">Ms.</a></li>
                    </ul>
                </div>
                <div className='col'>
                <input type="text" className="form-control" placeholder="Nominee First name" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
                <input type="number" className="form-control" placeholder="Nominee Last Name" 
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
                </div>
          
            </div>
          {/* DOB, - & Mobile number */}
          <div className='row mb-3 column-gap-1'>
                <div className='col'>
                    <input type="text" className="form-control" placeholder="Date Of Birth" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
                <input type="text" className="form-control" placeholder="Nominee Relationship" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'></div>

                <p className='mt-3' style={{fontSize: "14px"}}>Note: The policy will start immediately from the date of transaction gets processed.</p>
            </div>
           
        </div> 


       


       {/* Communication Address */}
       <div className='mb-5'>
          <h4 className='mb-4'>Communication Address</h4>

          {/* Adress */}
          <div className='row mb-3 column-gap-1'>
                <div className='col'>
                    <textarea class="form-control" placeholder='Address' rows="3"></textarea>
                </div>
            </div>
            
          {/* Pincode, City & State */}
          <div className='row mb-3 column-gap-1'>
                <div className='col-4'>
                    <input type="number" maxLength="6" className="form-control" placeholder="Pin Code"
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col' >
                    <input type="text" maxLength="6" className="form-control" placeholder="City"
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col' >
                    <input type="text" maxLength="6" className="form-control" placeholder="State"
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
            </div>

            <div class="form-check ">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                Is the above address same as mentioned in RC book?
                </label>
            </div> 

            <div className='d-flex justify-content-end mt-4'>
                <Link to="/confirmation">
                    <button className='btn btn-primary px-5 text-center float-end' >
                        Pay Now
                    </button>
                </Link>
            </div>

           
        </div> 
    </div>
  )
}

export default PersonalDetails