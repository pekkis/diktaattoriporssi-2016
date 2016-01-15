import React from 'react';
import { Link } from 'react-router';
import Name from './Name';
import Image from '../Image';
import Reign from './Reign';

export default function PreviewCard(props) {

    const { dictator } = props;

    console.log(dictator.synopsis);

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
                    {dictator.naughtiness.displayMilliHitlers} mHi
                </div>
            </div>

            <div className="synopsis" dangerouslySetInnerHTML={{__html: dictator.synopsis}} />

        </section>
    );


}
