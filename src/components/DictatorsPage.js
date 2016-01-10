import React from 'react';
import { fetchDictators } from '../actions/dictator-actions';

import PageContainer from './PageContainer';
import PageHeader from './PageHeader';
import AsideContainer from './AsideContainer';
import ContentContainer from './ContentContainer';

import PreviewCard from './dictator/PreviewCard';


import { Link } from 'react-router';

class DictatorsPage extends React.Component {

    render() {

        const { dictators } = this.props;

        const ranking = dictators
            .filter(d => d.canonicalRanking)
            .sortBy(d => d.canonicalRanking);

        return (

            <PageContainer id="dictators">
                <PageHeader>

                    <h1>Diktaattorit</h1>

                    <p>
                        Edessäsi seisoo virallinen Diktaattoripörssi, ystävien kesken pelkkä 'Pörssi, maailman
                        kahdeksanneksi ihmeeksikin mainittu, ainoa, oikea, aito ja alkuperäinen diktaattoriranking.
                        Listautumista odottavat styrankit löydät <Link to="/diktaattorit/esilista">esilistalta</Link>.
                    </p>
                </PageHeader>

                <ContentContainer>
                    <div className="margined">
                        {ranking.map(d =>
                            <PreviewCard key={d.uuid} dictator={d} />
                        )}
                    </div>
                </ContentContainer>

                <AsideContainer>
                    Sum stuff
                </AsideContainer>

            </PageContainer>
        );
    }
};

DictatorsPage.fetch = ({dispatch}) => {
    return dispatch(fetchDictators());
};

export default DictatorsPage;
