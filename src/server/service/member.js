import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const signin = async (id, password) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/member/signin`, {
      id,
      password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const signup = async ( nickname, id, password ) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/member/signup`, {
      nickname,
      id,
      password,
    });
    return response;
  } catch (error) {
    return error;
  }
};