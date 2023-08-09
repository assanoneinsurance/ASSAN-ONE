import {configureStore} from '@reduxjs/toolkit'
import authSlice from './redux/authSlice'
import VehicleDetailsSlice from './redux/VehicleDetailsSlice';

const store = configureStore({
    reducer: {
        user: authSlice,
        vehicleN : VehicleDetailsSlice
    }
})


export default store;