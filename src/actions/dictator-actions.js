import dictators from '../services/dictator';

export const RECEIVE_DICTATORS = 'RECEIVE_DICTATORS';
export const ADI_SET_MOOD = 'ADI_SET_MOOD';

export function fetchDictators() {
    return function(dispatch, getState) {

        const dictatorz = getState().dictator.get('dictators');
        if (dictatorz.count()) {
            return Promise.resolve(true);
        }

        return dictators.fetchAll().then(dictators => {
            return dispatch({
                type: RECEIVE_DICTATORS,
                payload: dictators
            });
        });
    };
};

export function setAdisMood(mood) {
    return {
        type: ADI_SET_MOOD,
        payload: mood
    };
}
