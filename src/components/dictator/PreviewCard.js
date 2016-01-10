import React from 'react';
import { Link } from 'react-router';
import Name from './Name';
import Image from '../Image';
import Icon from 'react-fa';
import Reign from './Reign';

export default function PreviewCard(props) {

    const { dictator } = props;

    console.log(dictator);

    return (

        <section id={dictator.canonicalName} className="box box-content box-dictator">

            <Link to={`/diktaattori/${dictator.canonicalName}`}>
                <Image alt={dictator.identity.displayName} src={dictator.imageUrl} version="card::x:100" />
            </Link>

            <h2>
                {dictator.canonicalRanking}.&nbsp;
                <Link to={`/diktaattori/${dictator.canonicalName}`}>
                    <Name identity={dictator.identity} />
                </Link>,&nbsp;
                <Link to={`/diktaattorit/${dictator.country.continent.canonicalName}/${dictator.country.canonicalName}`}>{dictator.country.name}</Link>
            </h2>

            <div className="info">

                <Reign reign={dictator.reign} />

                <div className="naughtiness">
                    <Icon name="tachometer"></Icon> {dictator.naughtiness.displayMilliHitlers} mHi
                </div>
            </div>

            <p>
            <strong>Adolf Hitlerin</strong>, Saksan Führerin, aggressiivinen ekspansionismi johti
            toiseen maailmansotaan, historian tuhoisimpaan konfliktiin.
            Hitler teollisti vihan ja tappamisen projektissa, joka huipentui holokaustiin: juutalaisten, romanien, vammaisten
            ja muiden natsien silmissä kelvottomien kansanmurhaan.
            </p>

            <div className="clearer"></div>

        </section>
    );


}
