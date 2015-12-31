import React from 'react';
import { fetchDictators } from '../actions/dictator-actions';
import Adi from './Adi';

class IndexPage extends React.Component {

    render() {

        const { dictators } = this.props;

        return (

            <section>

                <p>
                    {dictators.count()} dictators
                </p>

                <Adi />

            </section>
        );
    }
};

IndexPage.fetch = ({dispatch}) => {
    return dispatch(fetchDictators());
};

export default IndexPage;
