import {React, useState, useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset, selectUserName, setIsLoggedIn, setUser } from './redux/authSlice';
import Cookies from 'js-cookie';
import {HashRouter, Routes, Route} from 'react-router-dom'


import Home from './screens/Home';

import Aside from './components/Aside';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MyAccount from './screens/MyAccount/MyAccount';


import Dashboard from './screens/Dashboard';
import Claims from './screens/Claims';
import Training from './screens/Training';

import Confirmation from './screens/Health Insurance/Confirmation';
import PersonalDetails from './screens/Health Insurance/PersonalDetails';
import SavedQoutes from './screens/SavedQoutes';
import DetailsOfCustomer from './screens/Health Insurance/DetailsOfCustomer';
import AgainDetailsOfCustomer from './screens/Health Insurance/AgainDetailsOfCustomer';
import PlanDetails from './screens/Health Insurance/PlanDetails';

// Car Insurance
import PConfirmation from './screens/PrivateCar/PConfirmation'
import PPersonalDetails from './screens/PrivateCar/PPersonalDetails'
import PPlanDetails from './screens/PrivateCar/PPlanDetails'
import PCustomer from './screens/PrivateCar/PCustomer';

// Two WHeeler
import TCustomer from './screens/TwoWheeler/TCustomer';
import TwoWheelerDetails from './screens/TwoWheeler/TwoWheelerDetails';
import TConfirmation from './screens/TwoWheeler/TConfirmation';
import TPersonalDetails from './screens/TwoWheeler/TPersonalDetails';
import TPlanDetails from './screens/TwoWheeler/TPlanDetails';




import Sell_Insurance from './screens/Sell Insurance/Sell_Insurance';
import Leads from './screens/Leads';
import Renewal from './screens/Renewal';
import Prospects from './screens/Prospects';
import ACustomer from './screens/ACustomer';
import CarDetails from './screens/PrivateCar/CarDetails';
import Register from './screens/Register/Register';
import jwtDecode from 'jwt-decode';


function App() {
  const decodeToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      // Handle token decoding error (e.g., invalid token format)
      return null;
    }
  };
  
  const dispatch = useDispatch();

  let {isLoggedIn, token, success, user} = useSelector((state) => state.user);

  useEffect(() => {
    const token = Cookies.get('token');
    if(token){
      const userData = decodeToken(token);
      dispatch(setUser(userData));
    }
    if (!token) {
      dispatch(reset());
    }
  }, [token]);
  
  return (
    <div>
    <div className="App container">
    <HashRouter>
      {!isLoggedIn && (
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes> 

              
        )
      } 
     

      {isLoggedIn && (
          <>  

          <Navbar />
          <div className='row' style={{padding: "50px"}}>
            <div className='col-3'>
              <Aside />
            </div>
            <div className='col'>
  
    
            <Routes>
  

              <Route path='/' element={ <Dashboard />}></Route>
              <Route path='/sellInsurance' element={ <Sell_Insurance />}></Route>
  
              {/* HEALTH INSURANCE */}
              <Route path='/personalDetails' element={ <PersonalDetails />}></Route>
              <Route path='/planDetails' element={ <PlanDetails />}></Route>
              <Route path='/healthInsurance' element={ <DetailsOfCustomer />}></Route>
              <Route path='/confirmation' element={ <Confirmation />}></Route>
  
              {/* Car INSURANCE */}

              <Route path='/carInsurance' element={ <CarDetails />}> </Route>
              <Route path='/pcustomer' element={ <PCustomer />}> </Route>
              <Route path='/pplanDetails' element={ <PPlanDetails />}></Route>
              <Route path='/pPersonalDetails' element={ <PPersonalDetails />}> </Route>
              <Route path='/pConfirmation' element={ <PConfirmation />}></Route>
  
  
              {/* Two Wheeler INSURANCE */}
              <Route path='/twoWheeler' element={ <TwoWheelerDetails />}> </Route>
              <Route path='/tCustomer' element={ <TCustomer />}> </Route>
              <Route path='/tplanDetails' element={ <TPlanDetails />}></Route>
              <Route path='/tPersonalDetails' element={ <TPersonalDetails />}> </Route>
              <Route path='/tConfirmation' element={ <TConfirmation />}></Route>


              {/* Dashboard */}
              <Route exact path='/dashboard'  element={ <Dashboard />}></Route>


              {/* Saved Quotes */}
              <Route path='/savedQuotes' element={ <SavedQoutes />}></Route>

              {/* Renewal */}
              <Route path='/renewal' element={ <Renewal />}></Route>

              {/* Prospects */}
              <Route path='/prospects' element={ <Prospects />}></Route>


              {/* Customers */}
              <Route path='/customers' element={ <ACustomer />}></Route>


              {/* Leads */}
              <Route path='/leads' element={ <Leads />}></Route>
  
              {/* Claims */}
              <Route path='/claims' element={ <Claims />}></Route>
  
              {/* Training */}
              <Route path='/training' element={ <Training />}></Route>


              {/* MyAccount */}
              <Route path='/myAccount' element={ <MyAccount />}></Route>
            </Routes>

            {/* <Dashboard /> */}
            {/* <Claims /> */}
            {/* <Training /> */}
            {/* <SavedQoutes /> */}
  
            {/* _________________________ */}
  
  
  
  
  
            {/* <Confirmation /> */}
            {/* <PersonalDetails /> */}
            {/* <DetailsOfCustomer /> */}
            {/* <AgainDetailsOfCustomer /> */}
            {/* <PlanDetails /> */}
  
            {/* PRIVATE CAR */}
            {/* <Customer /> */}
  
  
            {/* Two Wheeler */}
            {/* <TConfirmation /> */}
            {/* <TPersonalDetails /> */}
            {/* <TPlanDetails /> */}
            
  
            {/* <MyAccount /> */}
            </div>
                
          </div>
  
  
  
         <Footer />
         </>
  
        )
      }

     
     </HashRouter>
     </div>
     </div>
  );
}

export default App;
