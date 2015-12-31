import createAxios from './axios';
import { List } from 'immutable';

const axios = createAxios();

export default {

    fetchAll: () => {
        return axios
            .get('/dictator')
            .then(response => response.data)
            .then(dictators => List(dictators));
    },
};
