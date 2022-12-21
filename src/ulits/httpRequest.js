import axios from 'axios';

console.log(process.env.NODE_ENV);

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// Thay the data cho ngan code
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
