import React from 'react';
import { fetchDictators } from '../actions/dictator-actions';
import Adi from './Adi';

var count = 0;

class IndexPage extends React.Component {

    render() {

        const { dictators } = this.props;

        return (

            <section>

                <p>
                    {dictators.count()} dictators
                </p>

            </section>
        );
    }
};

IndexPage.fetch = ({dispatch}) => {
    return dispatch(fetchDictators());
};

export default IndexPage;
