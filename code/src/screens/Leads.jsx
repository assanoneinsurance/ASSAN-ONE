import React from 'react'

const Leads = () => {
  return (
    <div className='text-start'>
        <h2 className='text-primary' style={{marginBottom: "50px"}}>
            Leads
        </h2>
        <div class="input-group rounded-pill w-50 m-auto mb-5">
            <span class="input-group-text" id="search-icon"><i class="fas fa-search"></i></span>
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-icon" />
        </div>
        <div>
            <table className='w-100'>
                <thead className='text-white'>
                    <tr>
                      <th className='bg-primary border p-1'>Sr No.</th>
                      <th className='bg-primary border p-1'>Name</th>
                      <th className='bg-primary border p-1'>Age</th>
                      <th className='bg-primary border p-1'>Type of Insurance</th>
                      <th className='bg-primary border p-1'>Email ID</th>
                      <th className='bg-primary border p-1'>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>J. Cole</td>
                        <td>35</td>
                        <td>Car</td>
                        <td>somwthing@gmail.com</td>
                        <td>XXXXX-XXXXX</td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Leads