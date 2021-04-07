/* eslint-disable */
import axiosApiInstance from 'Api/config/axios';
import AppConfig from 'Constants/AppConfig';

export default {

  getSomething: async (params) => {
    return axiosApiInstance.post(`${AppConfig.apiUrl}/something`, params)
  },
};
