import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    RECEIVE_DICTATORS,
    ADI_SET_MOOD
} from '../actions/dictator-actions';

const defaultState = Map({
    dictators: List(),
    adi: 'angry',
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case RECEIVE_DICTATORS:
            return state.set('dictators', action.payload);
            break;

        case ADI_SET_MOOD:
            return state.set('adi', action.payload);
            break;

        default:
            return state;
    }
};
