import axios from 'axios';

const api = axios.create({
  baseURL: "https://myapi-covid19.herokuapp.com/api"
});

export default api;