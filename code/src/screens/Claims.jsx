import React from 'react'

const Claims = () => {
  return (
    <div className='text-start'>
        <h3 className='text-primary' style={{marginBottom: "90px"}}>Claims</h3>
        <div className='mb-5'>
            <h5 className='fw-bold'>We're here to help</h5>
            <p>We are truly sorry you are going through a difficult time and want to make the process as easy as possible Please do let us know it we can be of any assistance</p>
        </div>
        <div className='row mb-4 column-gap-1'>
            <strong className='mb-2'>I want to file a claim for:</strong>

          <div className='col'>
          <button class="btn border-secondary-subtle dropdown-toggle w-100" type="button" 
                    data-bs-toggle="dropdown" aria-expanded="false">
              Select Insurance
              </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            
          </div>
          <div className='col'>
                <button className='btn btn-primary px-5 text-nowrap'>Start now</button>
          </div>         
        </div>


        <div className='row mb-3 column-gap-1'>
            <strong className='mb-2'>Submit online claim:</strong>
            <div className='col'>
                <input type="text" class="form-control" placeholder="City & RTO" 
                        aria-label="Claim Request for" aria-describedby="basic-addon2" />                 
            </div>         
            <div className='col'>
                <input type="text" class="form-control" placeholder="City & RTO" 
                        aria-label="Insurance company" aria-describedby="basic-addon2" />                 
            </div>         
            <div className='col'>
                <input type="text" class="form-control" placeholder="City & RTO" 
                        aria-label="Insurance Policy Number" aria-describedby="basic-addon2" />                 
            </div>         
        </div>

        <div className='row mb-3 column-gap-1'>
            <strong className='mb-2'>Personal Details:</strong>
            <div className='col'>
                <input type="text" class="form-control" placeholder="City & RTO" 
                        aria-label="Full name" aria-describedby="basic-addon2" />                 
            </div>         
            <div className='col'>
                <input type="email" class="form-control" placeholder="City & RTO" 
                        aria-label="email" aria-describedby="basic-addon2" />                 
            </div>         
            <div className='col'>
                <input type="number" class="form-control" placeholder="City & RTO" 
                        aria-label="Mobile Number" aria-describedby="basic-addon2" />                 
            </div>         
        </div>

        <div className='mb-3'>
            <strong className='mb-2'>Details About claim:</strong>
            <div>
                <textarea type="text" class="form-control" rows="4" placeholder="..." 
                        aria-label="detailsAboutClaim" aria-describedby="basic-addon2" />                 

                <div className='form-check'> 
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                "I hereby confirm that I have read and agree to the Terms & Conditions of Assan One Website"
                </label>
                </div> 
            </div>         
        </div>
        
        <div className='text-end '>
        <button className='btn btn-primary px-5 text-nowrap'>Claim</button>
        </div>
    </div>
  )
}

export default Claims