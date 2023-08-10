import axios from 'axios';

export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
  };
};

export const loginError = (errorMessage) => {
  return {
    type: 'LOGIN_ERROR',
    payload: errorMessage,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};


export const authenticateUser = (userData) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/users/username`, {
          params: userData, // Cambia de enviar una solicitud POST a una solicitud GET con parámetros
        });
  
        if (response.data) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginError('Invalid credentials'));
        }
      } catch (error) {
        dispatch(loginError('An error occurred'));
      }
    };
  };
