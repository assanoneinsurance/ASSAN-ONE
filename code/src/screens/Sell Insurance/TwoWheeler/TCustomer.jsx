import {React, useState} from 'react'
import { Link } from 'react-router-dom';
const TCustomer = () => {


  const [existingCar, setExistingCar] = useState(false);

  if(existingCar){
    return (
      
    <div className='text-start'>
      <h1 className='text-primary mb-5'>Twe Wheeler Insurance</h1>
      <h3 className='' style={{marginBottom: "90px"}}>Customer</h3>
      <div class="btn-group w-100 mb-5" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary" onClick={() => setExistingCar(true)}>New</button>
        <button type="button" class="btn btn-primary" >Existing</button>
      </div>

      {/* Vehicle Details */}
      <div className='' >
        <h4 className='mb-4'>Vehicle Details</h4>

        {/* Vehicle number, Vehicle model & Vehicle variant inputs */}
        <div className='row mb-3 column-gap-1'>
          <div className='col'>
            <input type="text" class="form-control" placeholder="Vehicle make" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
          </div>
          <div className='col'>
            <input type="text" class="form-control" placeholder="Vehicle model" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
          </div>
          <div className='col'>
            <input type="text" class="form-control" placeholder="Vehicle variant" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
          </div>
         
        </div>

        {/* Other 3 inputs*/}        
        <div className='row column-gap-1 mb-5'>
          <div className='col'>
            <button class="btn border-secondary-subtle dropdown-toggle w-100" type="button" 
                    data-bs-toggle="dropdown" aria-expanded="false">
              2019
              </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            
          </div>
          {/* 2nd Col */}
          <div className='col'>
            <input type="text" class="form-control" placeholder="City & RTO" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
          </div>
          
          {/* 3rd Col */}
          <div className='col'>
          <button class="btn border-secondary-subtle dropdown-toggle w-100" type="button" 
                    data-bs-toggle="dropdown" aria-expanded="false">
              Expired less than 90days
              </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
                            
          </div>
         
        </div>

        {/* Has ownership... */}
        <div className='d-flex'>
          <p className='text-secodary mx-2'>Has Ownership of car transfered or Changed in last 12 months: </p>
          <div className='form-check'>
            <input className="form-check-input " type="radio" name="Answer" id="Yes" />
            <label className="form-check-label" style={{marginRight: "10px"}} for="Yes">
              Yes
            </label>
          </div>
          <div className='form-check'>
            <input className="form-check-input" style={{marginRight: "10px"}} type="radio" name="Answer" id="No" />
            <label className="form-check-label " for="No">
              No
            </label>
          </div>
        </div>
        
        {/* Personal Details */}
        <div>
          <h4 className='mb-4'>Personal Details</h4>

          {/* Vehicle number, Vehicle model & Vehicle variant inputs */}
          <div className='row mb-3 column-gap-1'>
            <div className='col'>
              <input type="text" class="form-control" placeholder="Full name" 
                      aria-label="Full name" aria-describedby="basic-addon2" />                 
            </div>
            <div className='col'>
              <input type="email" class="form-control" placeholder="Email-ID" 
                      aria-label="emailid" aria-describedby="basic-addon2" />                 
            </div>
            <div className='col'>
              <input type="number" class="form-control" placeholder="Mobile number" 
                      aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
            </div>
          
          </div>
        </div> 
        {/*  */}
        <Link to='/tplanDetails'>
          <button style={{height: "30px", width: "150px"}} className='btn btn-primary position-absolute end-0 align-items-center text-center' >
            Get Quote Now
          </button>
        </Link>



      </div>
    </div>
    )
  }


  
  return (
    <div className='text-start position-relative'>
            <h1 className='text-primary mb-5'>Twe Wheeler Insurance</h1>
      <h3 className='' style={{marginBottom: "90px"}}>Customer</h3>
      <div class="btn-group w-100 mb-5" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">New</button>
        <button type="button" class="btn btn-secondary" onClick={() => setExistingCar(true)}>Existing</button>
      </div>

      {/* Vehicle Details */}
      <div className='' >
        <h4 className='mb-4'>Vehicle Details</h4>

        {/* Vehicle number, Vehicle model & Vehicle variant inputs */}
        <div className='row mb-3 column-gap-1'>
          <div className='col'>
            <input type="text" class="form-control" placeholder="Vehicle make" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
          </div>
          <div className='col'>
            <input type="text" class="form-control" placeholder="Vehicle model" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
          </div>
          <div className='col'>
            <input type="text" class="form-control" placeholder="Vehicle variant" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
          </div>
         
        </div>

        {/* Other 3 inputs*/}        
        <div className='row column-gap-1 mb-5'>
          <div className='col'>
            <button class="btn border-secondary-subtle dropdown-toggle w-100" type="button" 
                    data-bs-toggle="dropdown" aria-expanded="false">
              2019
              </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            
          </div>
          {/* 2nd Col */}
          <div className='col'>
            <input type="text" class="form-control" placeholder="City & RTO" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
          </div>
          
          {/* 3rd Col */}
          <div className='col'>
          <button class="btn border-secondary-subtle dropdown-toggle w-100" type="button" 
                    data-bs-toggle="dropdown" aria-expanded="false">
              Expired less than 90days
              </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
                            
          </div>
         
        </div>

        {/* Has ownership... */}
        <div className='d-flex'>
          <p className='text-secodary mx-2'>Has Ownership of car transfered or Changed in last 12 months: </p>
          <div className='form-check'>
            <input className="form-check-input " type="radio" name="Answer" id="Yes" />
            <label className="form-check-label" style={{marginRight: "10px"}} for="Yes">
              Yes
            </label>
          </div>
          <div className='form-check'>
            <input className="form-check-input" style={{marginRight: "10px"}} type="radio" name="Answer" id="No" />
            <label className="form-check-label " for="No">
              No
            </label>
          </div>
        </div>
        
        {/* Personal Details */}
        <div>
          <h4 className='mb-4'>Personal Details</h4>

          {/* Vehicle number, Vehicle model & Vehicle variant inputs */}
          <div className='row mb-3 column-gap-1'>
            <div className='col'>
              <input type="text" class="form-control" placeholder="Full name" 
                      aria-label="Full name" aria-describedby="basic-addon2" />                 
            </div>
            <div className='col'>
              <input type="email" class="form-control" placeholder="Email-ID" 
                      aria-label="emailid" aria-describedby="basic-addon2" />                 
            </div>
            <div className='col'>
              <input type="number" class="form-control" placeholder="Mobile number" 
                      aria-label="Recipient's username" aria-describedby="basic-addon2" />                 
            </div>
          
          </div>
        </div> 
        {/*  */}
        <Link to='/tplanDetails'>
          <button style={{height: "30px", width: "150px"}} className='btn btn-primary position-absolute end-0 align-items-center text-center' >
            Get Quote Now
          </button>
        </Link>



      </div>
    </div>
  )
}

export default TCustomer