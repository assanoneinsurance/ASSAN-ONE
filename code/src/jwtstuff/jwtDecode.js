import jwtDecode from 'jwt-decode';

// Example function to decode the JWT token and extract user information
const getUserInfoFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const { id, username, email, password } = decodedToken;
    return { id, username, email, password  };
  } catch (error) {
    // Handle token decoding error (e.g., invalid token format)
    return null;
  }
};

// Usage example after receiving the token in the login process

const userInfo = getUserInfoFromToken(token);
console.log(userInfo); // This will g