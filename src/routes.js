import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { receiveTodos } from './actions/todo-actions';
import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';
import PropagandaPage from './components/container/PropagandaPageContainer';

import DictatorsPage from './components/container/DictatorsPageContainer';
import DictatorPage from './components/container/DictatorPageContainer';


export function createRoutes({ store, history }) {

    function checkFetcher(nextState, replaceState, callback) {

        if (!this.component.fetch) {
            return callback();
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

            <Route path="diktaattorit">
                <IndexRoute component={DictatorsPage} onEnter={checkFetcher} />
                <Route path="/diktaattori/:canonicalName" component={DictatorPage} />
            </Route>

            <Route path="propaganda" component={PropagandaPage}/>


        </Route>
    );

}

