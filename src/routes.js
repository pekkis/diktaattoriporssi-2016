import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { receiveTodos } from './actions/todo-actions';
import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';

export function createRoutes({ store, history }) {

    function checkFetcher(nextState, replaceState, callback) {

        if (!this.component.fetch) {
            callback();
        }

        const params = {
            dispatch: store.dispatch,
            params: nextState.params
        };

        this.component.fetch(params).then(() => callback()).catch(e => {
            console.log(e, 'error');
        });
    }

    function initApp(nextState, replaceState, callback) {

        store.dispatch(receiveTodos()).then(() => {
            callback();
        });
    }

    /*
    function requiresLogin(nextState, replaceState) {
        const user = store.getState().user.get('user');

        if (user.anonymous) {
            replaceState(
                {
                    'next': nextState.location.pathname,
                },
                '/login'
            );
        }
    }
    */

    return (
        <Route path="/" component={App}>
            <IndexRoute component={IndexPage} onEnter={checkFetcher}/>
        </Route>
    );

}

