import {React, useState} from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../assets/ICONS/Dashboard.svg';
import buyOnline from '../assets/ICONS/BuyOnline.svg';
import leads from '../assets/ICONS/Leads.svg';
import prospects from '../assets/ICONS/prospects1.png';
import customerSvg from '../assets/ICONS/Customer.svg';

import training from '../assets/ICONS/TrainingInAside.svg';
import { useSelector } from 'react-redux';


const Aside = () => {

  const [activeButton, setActiveButton] = useState(null);

  const {username} = useSelector((state) => state.user.user);
  console.log(username);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    console.log(button);
  };

  return (
    <div className='sticky-top sticky-offset'>
      {/* profile */}
      <div className='welcome d-flex'>
        <div> 
          <img src="data:image/png;base64,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" alt="profile-pic" 
                  className='img-fluid rounded-circle' style={{width: "75px", height: "75px"}}/></div>
        <div className='mx-3 my-3'>
          <p className='m-0 text-primary' style={{ textAlign: "start"}}>Welcome!</p>
          <p style={{width: "100%"}}>{username ? username : "Dummy name"}</p>
        </div>
      </div>

      <div className='d-flex flex-column align-items-start'>
        <ul className='navbar-nav ' >
          <li className='nav-item d-flex my-4 justify-content-start ' style={{width: "100%"}}>
            <img src={dashboard} alt="" style={{width: "27px"}} />
            <Link to='/dashboard' className='text-decoration-none text-black'>
              <button className={`btn bg-white border-0 fs-5 ${activeButton === 'dashboard' ? 'activee' : ''}`}
                      onClick={() => handleButtonClick('dashboard')}>
                        DashBoard
              </button>
            </Link>
          </li>
          <li className='nav-item d-flex my-4 justify-content-start ' style={{width: "100%"}}>
            <img src={buyOnline} alt="" style={{width: "27px"}} />
            <Link to='/sellInsurance' className='text-decoration-none text-black'>
              <button className={`btn bg-white text-black border-0 fs-5 ${activeButton === 'buyOnline' ? 'activee' : ''}`}
                      onClick={() =>  handleButtonClick('buyOnline')}>
                        Sell Insurance
              </button>
            </Link>
          </li>
          <li className='nav-item d-flex my-4 justify-content-start ' style={{width: "100%"}}>
            <img src={dashboard} alt="" style={{width: "27px"}} />
            <Link to='/savedQuotes' className='text-decoration-none text-black'>
              <button className={`btn bg-white text-black border-0 fs-5 ${activeButton === 'savedQuotes' ? 'activee' : ''}`}
                      onClick={() => handleButtonClick('savedQuotes')}>
                        Saved Quotes
              </button>
            </Link>
          </li>
          <li className='nav-item d-flex fs-5 mb-4 justify-content-start'>
          <img src={leads} alt="" style={{width: "27px"}} />
            <Link to='/leads' className='text-decoration-none text-black'>
              <button className={`btn bg-white text-black border-0 fs-5 ${activeButton === 'Leads' ? 'activee' : ''}`}
                      onClick={() => handleButtonClick('Leads')}>
                        Leads
              </button>
            </Link>
          </li>
          <li className='nav-item d-flex fs-5 mb-4 justify-content-start' style={{}}>
          <img src={prospects} alt="" style={{width: "27px"}} />
            <Link to='/prospects' className='text-decoration-none text-black'>
              <button className={`btn bg-white text-black border-0 fs-5 ${activeButton === 'Prospects' ? 'activee' : ''}`}
                      onClick={() => handleButtonClick('Prospects')}>
                        Prospects
              </button>
            </Link>
          </li>
          <li className='nav-item d-flex fs-5 mb-4 justify-content-start' style={{}}>
          <img src={customerSvg} alt="" style={{width: "27px"}} />
            <Link to='/customers' className='text-decoration-none text-black'>
              <button className={`btn bg-white text-black border-0 fs-5 ${activeButton === 'Customers' ? 'activee' : ''}`}
                      onClick={() => handleButtonClick('Customers')}>
                        Customers
              </button>
            </Link>
          </li>
          <li className='nav-item d-flex fs-5 mb-4 justify-content-start' style={{}}>
          <img src={dashboard} alt="" style={{width: "27px"}} />
            <Link to='/renewal' className='text-decoration-none text-black'>
              <button className={`btn bg-white text-black border-0 fs-5 ${activeButton === 'Renewal' ? 'activee' : ''}`}
                      onClick={() => handleButtonClick('Renewal')}>
                        Renewal
              </button>
            </Link>
          </li>
          <li className='nav-item d-flex fs-5 mb-4 justify-content-start' style={{}}>
          <img src={dashboard} alt="" style={{width: "27px"}} />
            <Link to='/claims' className='text-decoration-none text-black'>
              <button className={`btn bg-white text-black border-0 fs-5 ${activeButton === 'Claims' ? 'activee' : ''}`}
                      onClick={() => handleButtonClick('Claims')}>
                        Claims
              </button>
            </Link>
          </li>
          <li className='nav-item d-flex fs-5 mb-4 justify-content-start' style={{}}>
          <img src={training} className='' alt="" style={{width: "27px"}} />
            <Link to='/training' className='text-decoration-none text-black'>
              <button className={`btn bg-white text-black border-0 fs-5 ${activeButton === 'training' ? 'activee' : ''}`}
                      onClick={() => handleButtonClick('training')}>
                        Training
              </button>
            </Link>
          </li>
         
       
        </ul>
      </div>

    </div>
  )
}

export default Aside