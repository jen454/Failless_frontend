import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getAllArticle = async () => {
  const response = await axios.get(`${API_ENDPOINT}/article/all`);
  return response;
};

export const getArticle = async (id) => {
  const response = await axios.get(`${API_ENDPOINT}/article?id=${id}`);
  return response;
};

export const writeArticle = async (data) => {
  const response = await axios.post(`${API_ENDPOINT}/article`, data);
  return response;
};