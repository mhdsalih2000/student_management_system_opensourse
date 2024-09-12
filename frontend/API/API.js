import Axios from 'axios';


const base = "http://127.0.0.1:8080/"

const Api = Axios.create({
  baseURL: base,
});

Api.interceptors.request.use((config) => {
  const token =localStorage.getItem('token');
  if (!token) return config;
  if (config?.headers) {
    config.headers = { 
      Authorization: `Bearer ${token}` ,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*' };
  }
  return config;
});

export default Api