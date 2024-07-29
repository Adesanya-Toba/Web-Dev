import axios from 'axios'

const api = axios.create({
    // Providing the baseurl for our fast api application
    baseURL: 'http://192.168.1.164:8000', // Using the IP address of the host machine allows other devices on the network to access the back-end app.
    // baseURL: 'localhost:8000',
});

export default api;