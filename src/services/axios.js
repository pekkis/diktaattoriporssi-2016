import axios from 'axios';
import config from '../../config.client';

const defaults = {
    baseURL: config.api,
    timeout: 10000
};

export default function(options = {}) {
    return axios.create({
        ...defaults,
        ...options
    });
};

