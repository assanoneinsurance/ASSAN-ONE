import React from 'react'

const SavedQoutes = () => {
  return (
    <div className='text-start'>
        <h2 className='text-primary' style={{marginBottom: "50px"}}>
            Saved Quotes
        </h2>
        <div class="input-group rounded-pill w-50 m-auto mb-5">
            <span class="input-group-text" id="search-icon"><i class="fas fa-search"></i></span>
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-icon" />
        </div>
        <div>
            <table className='w-100'>
                <thead className='text-white'>
                    <tr>
                      <th className='bg-primary border p-1'>Date</th>
                      <th className='bg-primary border p-1'>Product</th>
                      <th className='bg-primary border p-1'>Quote Number</th>
                      <th className='bg-primary border p-1'>Status</th>
                      <th className='bg-primary border p-1'>View</th>
                      <th className='bg-primary border p-1'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">XX / XX / YYYY</td>
                        <td>Two Wheeler</td>
                        <td>XXXXX-XXXXX</td>
                        <td>Successful</td>
                        <td><i class="fa-solid fa-eye"></i></td>
                        <td><i class="fa-solid fa-trash"></i></td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SavedQoutes