import axios from 'axios';

const axiosApiInstance = axios.create({
  headers: {
    get: {     
      'x-api-key': 'crCx5c0l3b87gnnB2Inqe5FYd9gFAFMK77DVXkgF'
    }
  }
});

export default axiosApiInstance;
