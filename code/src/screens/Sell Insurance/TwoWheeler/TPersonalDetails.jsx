import React from 'react'
import { Link } from 'react-router-dom'



const TPersonalDetails = () => {
  return (
    <div className='text-start'>
        <h1 className='text-primary mb-5'>Twe Wheeler Insurance</h1>
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
             <input type="text" className="form-control bg-danger" placeholder="" 
                     aria-label="emailid" aria-describedby="basic-addon2" />                 
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


    {/* Vehicle Details */}
    <div className='mb-5'>
       <h4 className='mb-4'>Vehicle Details</h4>

       {/* Registration Date, Manufacturing Date & Engine Number */}
       <div className='row mb-3 column-gap-1'>
             <div className='col'>
             <input type="text" className="form-control" placeholder="Registration Date" 
                     aria-label="emailid" aria-describedby="basic-addon2" />                 
             </div>
             <div className='col'>
             <input type="text" className="form-control" placeholder="Manufacturing date" 
                     aria-label="emailid" aria-describedby="basic-addon2" />                 
             </div>
             <div className='col'>
             <input type="number" className="form-control" placeholder="Engine Number" 
                     aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
             </div>
       
         </div>
         
       {/* Chasis Number, financed by bank or institution */}
       <div className='row mb-3 column-gap-1'>
             <div className='col-4'>
                 <input type="text" className="form-control" placeholder="Chasis Number" 
                     aria-label="emailid" aria-describedby="basic-addon2" />                 
             </div>
             <div className='col' >
                 <p style={{fontSize: "12px"}} className='text-secodary m-0'>Has Ownership of car transfered or Changed in last 12 months: </p>
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
            <Link to='/tConfirmation'>
             <button className='btn btn-primary px-5 text-center float-end' >
                 Pay Now
             </button>
            </Link> 
         </div>

        
     </div> 
 </div>
  )
}

export default TPersonalDetails