import axios from 'axios'

const api = axios.create({
    // Providing the baseurl for our fast api application
    baseURL: 'http://localhost:8000',
});

export default api;