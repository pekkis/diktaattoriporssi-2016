import React from 'react';
import { fetchDictators } from '../actions/dictator-actions';
import Adi from './Adi';

var count = 0;

class PropagandaPage extends React.Component {

    render() {

        const { dictators } = this.props;

        return (

            <section>

                <h1>Propaganda</h1>

            </section>
        );
    }
};

PropagandaPage.fetch = ({dispatch}) => {
    return dispatch(fetchDictators());
};

export default PropagandaPage;
