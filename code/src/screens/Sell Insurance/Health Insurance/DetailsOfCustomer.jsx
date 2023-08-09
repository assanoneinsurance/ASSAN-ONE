import React from 'react'
import { Link } from 'react-router-dom'

const DetailsOfCustomer = () => {
  return (
    <div className='text-start'>
        <h1 className='text-primary mb-5'>Health Insurance</h1>
        <h4 className='mb-4'>Nominee Details</h4>
        <div className='border p-4 position-relative' >
            <h4 className=''>Basic details Of Customer</h4>
            <hr className='w-50 mb-4'/>

            {/* Title, Name Mobile number*/}
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
                <input type="text" className="form-control" placeholder="Full name" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
                <input type="number" className="form-control" placeholder="Mobile Number" 
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
                </div>
          
            </div>
            

           {/* City, Sum Assured, AddMembers button  */}
            <div className='row mb-5 column-gap-1'>
                <div className='col'>
                    <input type="text" className="form-control" placeholder="City" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
                <input type="text" className="form-control" placeholder="Sum Assured" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
                    <button className='btn btn-outline-primary w-100 px-3'>Add Members</button>
                </div>

            </div>


           {/* Select Gender, Relation, No of Child  */}
            <div className='row mb-3 column-gap-1'>
                <div className='col'>
                    <p style={{}} className='text-secodary m-0'>Select Gender</p>

                    <div className='d-flex '>
                        <div className='form-check'>
                            <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="Yes" />
                            <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="Yes">
                            Yes
                            </label>
                        </div>

                        <div className='form-check'>
                        <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="No" />
                            <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="No">
                            No
                            </label>
                        </div>
                    </div>
                </div>


                <div className='col'>
                <input type="text" className="form-control" placeholder="Relation" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
                <input type="text" className="form-control" placeholder="No Of children" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>

            </div>

           {/* Select Gender, Relation, No of Child  */}
            <div className='row mb-3 column-gap-1'>
                <div className='col'>
                <input type="text" className="form-control" placeholder="Eldest Child DOB" 
                        aria-label="emailid" aria-describedby="basic-addon2" />                 
                </div>
                <div className='col'>
                    <Link to="/planDetails">
                        <button className='btn btn-primary w-100 px-4'>View Quote</button>    
                    </Link>
                </div>
                <div className='col'></div>

            </div>



            
        </div>
    </div>
  )
}

export default DetailsOfCustomer