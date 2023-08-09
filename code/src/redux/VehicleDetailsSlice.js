import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loading: false,
    success: false,
    error: null,
    vehicle_details: null
}

export const vehicleDetailsf = createAsyncThunk(
    'vehicle/vehicleDetails',
    async () => {
        console.log();
        const options = {
        method: 'POST',
        url: 'https://vehicle-rc-information.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3c720b5980msh1e4d3f5aeec3f51p14a87bjsn1835be8e708a',
            'X-RapidAPI-Host': 'vehicle-rc-information.p.rapidapi.com'
        },
        data: {
            VehicleNumber: 'MH14CH3077'
        }
        };
  
        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
  )

  const vehicleSlice = createSlice({
    name: "vehicleN",
    initialState,
    reducers : {
    },
    extraReducers: {
        [vehicleDetailsf.pending]: (state) => {
            state.loading = true;
        },
        [vehicleDetailsf.fulfilled]: (state, action) => {
            state.loading = false
     
          
        },
        [vehicleDetailsf.rejected]: (state, {payload: {error, msg}}) => {
            state.loading = false;
            if(error) {
                state.error = error
            }
        },

    }
})





export default vehicleSlice.reducer;