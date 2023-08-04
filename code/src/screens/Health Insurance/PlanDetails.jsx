import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const PlanDetails = () => {
    



  return (
    <div className='text-start'>

        <h2 className='text-primary mb-5'>Health Insurance</h2>
        {/* Modify Sum Insured, Refine Plans, Pre-existing Diseases  */}
        {/* 1st row */}
        <div className='row mb-5 column-gap-1'>
            <div className='col'>
                <input type="text" className="form-control" placeholder="Modify Sum Assured" 
                    aria-label="emailid" aria-describedby="basic-addon2" />                 
            </div>
            <div className='col'>
                    <button className="btn border-secondary-subtle dropdown-toggle w-100 btn-inside-secondary" type="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Refine Plans
                    </button>
                    <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item text-center" href="#">
                        <div className='form-check'>
                            <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="Yes" />
                            <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="Yes">
                            Yes
                            </label>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item text-center" href="#">
                        <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="Sum Insured Restoration" />
                            <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="Sum Insured Restoration">
                            Sum Insured Restoration
                            </label>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item text-center" href="#">
                        <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="Maternity Cover" />
                            <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="Maternity Cover">
                            Maternity Cover
                            </label>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item text-center" href="#">
                        <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="No Copay" />
                            <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="No Copayr">
                            No Copay
                            </label>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className='col'>
                    <button className="btn border-secondary-subtle dropdown-toggle w-100 btn-inside-secondary" type="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Pre-Existing Diseases
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item text-center" href="#">
                            <div className='form-check'>
                                <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="Covered After 2 years" />
                                <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="Covered After 2 years">
                                    Covered After 2 Years
                                </label>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item text-center" href="#">
                            <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="Covered After 3 Years" />
                                <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="Covered After 3 Years">
                                Covered After 3 Years
                                </label>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item text-center" href="#">
                            <input className="form-check-input" style={{ width: "14px", height: "14px"}} type="radio" name="Answer" id="Covered After 4 Years" />
                                <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} for="Covered After 4 Years">
                                Covered After 3 Years
                                </label>
                            </a>
                        </li>
                    </ul>
                </div>

        </div>
        
        {/* 2nd Row */}
        {/* Compare Plans */}
        <div className='row mb-5 column-gap-1'>
            <div className='col-5'>
               <p style={{fontSize: "14px"}}>We Have Found Seven Matching Plans For You</p>               
            </div>
            <div className='col'>
                <button className='btn btn-outline-primary w-100 px-3'>Compare Plans</button>
            </div>
            <div className='col'>
                <button className='btn btn-outline-primary w-100 px-3'>Modify Quotes</button>
            </div>
        </div>

        
        {/* 3rd row */}
        {/* Plan box */}
        <div className='row mb-5 column-gap-1 border bg-light p-3'>
            <div className='col d-flex flex-column align-items-center justify-content-center'>
                <p><i className="fa-sharp fa-solid fa-star mx-1" ></i>Plan Details</p>
                <img src="data:image/png;base64,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" 
                     alt=""  className='mb-2' style={{width: "50px"}}/>
                <p>Suraksha</p>
            </div>
            <div className='col'>
                <div className='row'>
                    <p className='text-secondary mb-1'>Hospitalization Cover</p>
                    <p className='text-primaryy'>5 Lakhs</p>
                </div>
                <div className='row'>
                    <p className='text-secondary mb-1'>Exsiting Diseases</p>
                    <p className='text-primaryy'>4 Years</p>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <p className='text-secondary mb-1'>Cashless Network</p>
                    <a href='' className='text-primaryy text-decoration-none mb-3'>Click to View</a>
                </div>

                <div className='row'>
                    <p className='text-secondary mb-1'>Room rent</p>
                    <p className='text-Glight'>No Sublimit</p>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <p className='text-secondary mb-1'>Premium / Year (Inc. Tax)</p>
                    <p>14,765</p>
                </div>

                <div className='row'>
                    <Link to="/personalDetails">
                    <button className='btn btn-primary px-2'>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PlanDetails