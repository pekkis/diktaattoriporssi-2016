import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    RECEIVE_DICTATORS
} from '../actions/dictator-actions';

const defaultState = Map({
    dictators: List(),
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case RECEIVE_DICTATORS:
            return state.set('dictators', action.payload);
            break;

        default:
            return state;
    }
};
