import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"https://admindashboard-jobportal.onrender.com"
})

export default axiosInstance;
