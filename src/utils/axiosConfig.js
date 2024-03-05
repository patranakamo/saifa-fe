
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/v1/'
});

export default axiosInstance;