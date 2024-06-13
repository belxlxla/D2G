import axios from 'axios';

const baseURL = axios.create({
    baseURL: 'http://localhost:8081'
});

export default baseURL;