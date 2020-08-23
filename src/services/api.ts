import { resolve } from "path"

import { config } from "dotenv"
import axios from 'axios';

config({ path: resolve(__dirname, "../../.env") });

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default api;