import dictators from '../services/dictator';

export const RECEIVE_DICTATORS = 'RECEIVE_DICTATORS';

export function fetchDictators() {
    return function(dispatch) {
        return dictators.fetchAll().then(dictators => {
            return dispatch({
                type: RECEIVE_DICTATORS,
                payload: dictators
            });
        });
    };
};
