import React from 'react'

const AgainDetailsOfCustomer = () => {
  return (
    <div className='text-start'>
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
           {/* - , - & AddMembers button  */}
            <div className='row mb-5 column-gap-1'>
                <div className='col'>
               
                </div>
                <div className='col'>
                      
                </div>
                <div className='col'>
                    <button className='btn btn-primary w-100 px-3'>Get Quote</button>
                </div>

            </div>


          


            
        </div>
    </div>
  )
}

export default AgainDetailsOfCustomer