import React from 'react';
import { fetchDictators } from '../actions/dictator-actions';
import Adi from './Adi';

import PageContainer from './PageContainer';
import Gallery from './Gallery';


class IndexPage extends React.Component {

    render() {

        const { dictators, gallery } = this.props;

        return (

            <PageContainer>

                <Gallery entry={gallery} />

            </PageContainer>
        );
    }
};

IndexPage.fetch = ({dispatch}) => {
    return dispatch(fetchDictators());
};

export default IndexPage;
