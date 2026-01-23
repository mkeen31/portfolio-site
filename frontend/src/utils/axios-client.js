import axios from 'axios';

const axiosClient = () => {
    const options = {};
    options.baseURL = process.env.VUE_APP_BASEURL;

    const instance = axios.create(options);
    instance.interceptors.request.use(
        config => {
            config.headers['Accept'] = "application/json";
            config.headers['x-api-key'] = process.env.VUE_APP_APIKEY;
            return config;
        },
        error => {
            console.log(error);
            return Promise.reject(error);
        }
    );
    return instance;
};

export default axiosClient;