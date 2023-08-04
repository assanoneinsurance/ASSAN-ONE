import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from "js-cookie";
import jwtDecode from 'jwt-decode';

// Get token from localstorage

const initialState = {
    msg: "default message",
    isLoggedIn: false,
    loading: false,
    success: false,
    token: "",
    user: '',
    error: null
}




// Redux action to register a new user
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/registerUser', userData);
      return response.data;
    } catch (error) {
      // Handle error and return it using rejectWithValue
      return error;
    }
  }
);


// Redux action to Login
// export const login = createAsyncThunk(
//   'user/login',
//   async (userData,  { rejectWithValue }) => {
//     try {

//       const response = await axios.post('http://localhost:8080/api/login', userData);
//       console.log(response.data);
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       return response.data;
      
      
//     } catch (error) {
//       // Handle error and return it using rejectWithValue
//       return rejectWithValue(error);
//     }
//   }
// );

// Send otp 
// export const sendOTP = createAsyncThunk(
//   'user/sendOTP',
//   async (mobile, {rejectWithValue}) => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/sendOTP', mobile);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// )


export const login = createAsyncThunk(
  'user/login',
  async (userData) => {
    try {
    
      const response = await axios.post('http://localhost:8080/api/login', userData);
      Cookies.set('token', response.data.token);
      return response.data;
    } catch (error) {
      return error;
    }
  }
)

// Redux action to Logout
export const logout = createAsyncThunk(
  'user/logout',
   async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/logout');
      return response.data;
      

    } catch (error) {
      // Handle error and return it using rejectWithValue
      return error;
    }
  }
);



const authSlice = createSlice({
    name: "user",
    initialState,

    reducers : {
        setIsLoggedIn: (state) => {
          state.isLoggedIn = true;
        },
        setUser(state, action) {
          state.user = action.payload;
          state.isLoggedIn = true;
        },
        reset : (state) => {
          state.isLoggedIn = false;
          state.token = '';
        }
      
    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.msg = "Successfull"
            state.loading = false
            state.user = action.payload.user;
         
          
        },
        [registerUser.rejected]: (state, {payload: {error, msg}}) => {
            state.loading = false;
            if(error) {
                state.error = error
            }else state.msg = msg
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.msg = "Logged in successfully";
            state.loading = false;
            state.token = action.payload.token;
            state.isLoggedIn = action.payload.success;
            state.success = action.payload.success;
        },
        [login.rejected]: (state, {payload: {error, msg}}) => {
            state.loading = false;
            if(error) {
                state.error = error
            }else state.msg = msg
        },
        [logout.pending]: (state, action) => {
            state.loading = true;
        },
        [logout.fulfilled]: (state, action) => {
            state.msg = "logout Successfull";
            state.loading = false;
           
           

        },
        [logout.rejected]: (state, {payload: {error, msg}}) => {
            state.loading = false;
            if(error) {
                state.error = error
            }else state.msg = msg
        },

    }
})




const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    // Handle token decoding error (e.g., invalid token format)
    return null;
  }
};



export const { reset, setIsLoggedIn, setUser } = authSlice.actions;
export default authSlice.reducer