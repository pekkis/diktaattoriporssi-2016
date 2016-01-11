import React from 'react';
import { fetchDictators } from '../actions/dictator-actions';

import PageContainer from './PageContainer';
import PageHeader from './PageHeader';
import AsideContainer from './AsideContainer';
import ContentContainer from './ContentContainer';

import PreviewCard from './dictator/PreviewCard';

class DictatorPage extends React.Component {

    render() {

        const { dictators } = this.props;

        return (

            <PageContainer id="dictators">
                <PageHeader>

                    <h1>Adolf Hitler</h1>

                    <ul className="tags">
                        <li className="tag"><span><a href="/diktaattorit/luokittelu/anti-älymystö">anti-älymystö</a></span></li>
                        <li className="tag"><span><a href="/diktaattorit/luokittelu/fanaattinen">fanaattinen</a></span></li>
                        <li className="tag"><span><a href="/diktaattorit/luokittelu/fasismi">fasismi</a></span></li>
                        <li className="tag"><span><a href="/diktaattorit/luokittelu/itsemurha">itsemurha</a></span></li>
                        <li className="tag"><span><a href="/diktaattorit/luokittelu/kansanmurhaaja">kansanmurhaaja</a></span></li>
                        <li className="tag"><span><a href="/diktaattorit/luokittelu/rasisti">rasisti</a></span></li>
                        <li className="tag"><span><a href="/diktaattorit/luokittelu/sotaherra">sotaherra</a></span></li>
                        <li className="tag"><span><a href="/diktaattorit/luokittelu/sotilas">sotilas</a></span></li>
                    </ul>

                    <div className="pure-g">

                        <div className="pure-u-2-3">

                            <div className="introduction">
                                <p>
                                    <strong>Adolf Hitlerin</strong>, Saksan Führerin, aggressiivinen ekspansionismi johti
                                    toiseen maailmansotaan, historian tuhoisimpaan konfliktiin.
                                    Hitler teollisti vihan ja tappamisen projektissa, joka huipentui holokaustiin: juutalaisten, romanien, vammaisten
                                    ja muiden natsien silmissä kelvottomien kansanmurhaan.
                                </p>
                            </div>
                        </div>

                        <div className="pure-u-1-3 data">
                            <table className="pure-table pure-table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Maa</th>
                                        <td>
                                            <a href="/diktaattorit/eurooppa/saksa">Saksa</a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Vallassa</th>
                                        <td>30.1.1933 - 30.4.1945</td>
                                    </tr>

                                    <tr>
                                        <th>Pahuus</th>
                                        <td>
                                            1&nbsp;000,00 mHi
                                            (<a href="/diktaattorit">#1</a>)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </PageHeader>

                <ContentContainer>

                </ContentContainer>

                <AsideContainer>
                    Sum stuff
                </AsideContainer>

            </PageContainer>
        );

    }
};

DictatorPage.fetch = ({dispatch}) => {
    return dispatch(fetchDictators());
};

export default DictatorPage;
