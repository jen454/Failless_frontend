import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const signin = async (id, pw) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/member/signin`, {
      id,
      pw,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const signup = async (id, pw) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/member/signup`, {
      id,
      pw,
    });
    return response;
  } catch (error) {
    return error;
  }
};