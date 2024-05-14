import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getAllPosts = async () => {
  const response = await axios.get(`${API_ENDPOINT}/community/all`);
  return response;
};

export const getPost = async (id) => {
  const response = await axios.get(`${API_ENDPOINT}/community?id=${id}`);
  return response;
};

export const writePost = async (data) => {
  const response = await axios.post(`${API_ENDPOINT}/community`, data);
  return response;
};