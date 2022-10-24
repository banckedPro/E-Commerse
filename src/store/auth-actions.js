import axios from 'axios';
import { apiEndpoints } from '../apiEndpoints';
import { authActions } from './auth-slice';

export const loginUser = (email, password) => {
  return async dispatch => {
    const loginRequest = async () => {
      const response = await axios({
        method: 'POST',
        url: apiEndpoints.login,
        data: { username: email, password },
      });

      if (response.status !== 200) {
        throw new Error('Some Error Occured');
      }
      return response.data;
    };

    try {
      const data = await loginRequest();
      dispatch(authActions.login());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};
