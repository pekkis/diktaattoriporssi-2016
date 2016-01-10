import React from 'react';
import { fetchDictators } from '../actions/dictator-actions';

class DictatorPage extends React.Component {

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

DictatorPage.fetch = ({dispatch}) => {
    return dispatch(fetchDictators());
};

export default DictatorPage;
