import axios from 'axios';
import { REACT_APP_BASE_URL } from "../const";

const http = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;