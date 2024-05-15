import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getAllComments = async (id) => {
  const response = await axios.get(`${API_ENDPOINT}/comment?postId=${id}`);
  return response;
};

export const writeComment = async (data) => {
  const response = await axios.post(`${API_ENDPOINT}/comment`, data);
  return response;
};