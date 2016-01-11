import React from 'react';

const entries = [
    {
        'image': require('./slider/bokassa-slider.jpg'),
        'alt': 'Jean-Bedel Bokassa kruunataan Keski-Afrikan keisariksi. Seremonia on herkkä ja koskettava',
        'caption': '"Diktaattoripörssi on kerrassaan mainio ilmestys. Jos minun olisi pakko valita, söisinkö mieluummin Puhemiehen vai sata pulleaa koulupoikaa, se olisi minulle vaikea pala purtavaksi." -- keisari Jean-Bedel Bokassa',
    },
    {
        'image': require('./slider/kim-jong-il-slider.jpg'),
        'caption': '"Tuhnu pommini on myös Diktaattoripörssin pommi, joten mieti kaksi kertaa ennen kuin lausut Puhemiehestä pahaa." -- Kim Jong-il, vuosisatamme valo',
        'alt': 'Kim Jong-Il tarkastamassa tiluksiansa. Lakeijat kertovat johtajallensa miellyttäviä valeita.',
    },
    {
        'image': require('./slider/idi-slider.jpg'),
        'caption': '"Mitähäh? Minä mistään Diktaattoripörssistä mitään tiedä, ilmaisia appelsiineja täällä piti tarjottaman." -- Idi Amin ovelasti juonimassamme haastattelussa',
        'alt': 'Idi Amin puhuu. Älä vain sekoita sitä, mitä hän sanoo, siihen mitä hän ajattelee.'
    },
    {
        'image': require('./slider/mussolini-hitler-slider.jpg'),
        'caption': '"Voittajien on helppo hymyillä. Adin ykkössija lämmittää meitä kuin se, kun joukkomme viimein saavuttivat Volgan Stalingradissa ja tiesimme ettei Neuvostoliitto kestäisi enää kuukauttakaan." -- Hitler ja Mussolini',
        'alt': 'Voittoisa akseli ajelee automobiililla'
    },
    {
        'image': require('./slider/gaddafi-slider.jpg'),
        'caption': '"Elämäni muuttui kuin taikaiskusta ostettuani Diktaattoripörssiltä sortokonsultaatiota. Pois hempeily ja bisnespiireissä kuhertelu, ja aukiot tyhjäksi Tiananmenin tyyliin! Kunnon verilöylytys tuntuu pitkästä aikaa hyvälle." -- eversti Muammar Gaddafi',
        'alt': 'Gaddafi ei anna periksi imperialistien hyökkäykselle'
    },

    {
        'image': require('./slider/kim-jong-body-slider.jpg'),
        'caption': '"Älä sure, Diktaattoripörssi. Lähetit minulle kimpun kimjongilioita 65-vuotispäiväkseni. Nyt nukun vähän aikaa ikiunta nimikkokukkieni ympäröimänä, mutta palaan kyllä kun maailma taas tarvitsee sankaria!" -- rakas johtajamme Kim Jong-il',
        'alt': 'Kim Jong-il nukkuu ikiunta kimjongilioiden ympäröimänä'
    },

    {
        'image': require('./slider/stalin-statue-slider.jpg'),
        'caption': '"Patsaani rapistuvat ja kaatuvat, kaupunkini katoavat kartalta ja hrustsevilaiset petturit tahraavat muistoani. Hirmutekoni eivät onneksi unohdu, koska Diktaattoripörssi ei salli niiden unohtua!" -- Stalin, neuvostokansojen isä aurinkoinen',
        'alt': 'Stalinin patsas seisoo puistossa... yksinäisenä, niin kovin yksinäisenä'
    },

    {
        'image': require('./slider/mobutu-slider.jpg'),
        'caption': '"Haloo? Haloo?! Onko puhemies puhelimessa? Mobutu tässä! Soittelen kertoakseni, että aion kansallistaa Diktaattoripörssin ja lussuttaa sen kuivaksi! Varastan niin kauan kuin on grammakin varastettavaa jäljellä!" -- Mobutu, Zairen kuningas',
        'alt': 'Mobutu Sese Seko soittaa puhe-miehelle puhe-elimellä'
    },

    {
        'image': require('./slider/albanian-bunkers-slider.jpg'),
        'caption': '"Tulkaa vaan, vaikka koko maailma kerralla. Likainen Tito, lännen imperialistit, neuvostolaiset revisionistit, ihmiskunnan vihollinen Mao legioonineen, hyökätkää vain. Näillä rannoilla bunkkerit ovat kilotavaraa!" -- Enver Hoxha, Albania',
        'alt': 'Mobutu Sese Seko soittaa puhemiehelle puhe-elimellä'
    },

    {
        'image': require('./slider/kim-jong-un-ja-dennis-rodman.jpg'),
        'caption': '"Viehättävä vaimo, miellyttävä mielihyväprikaati, kaikki maailman ylellisyydet, absoluuttinen valta ja listausanti Diktaattoripörssissä. Antaisin ne kaikki pois vaikka heti jos vain voisin olla kuin vanha kunnon Dennis!" -- Kim Jong-un',
        'alt': 'Kim Jong-un haaveilee suuremmasta kohtalosta'
    },

    {
        'image': require('./slider/turkmenbashi-kaantyy-kohti-diktaattoriporssia.jpg'),
        'caption': '"Pääkaupungissa patsaani kääntyy aina kohti Aurinkoa. Diktaattoripörssiä ei tarvitse kääntää, koska Aurinko kääntyy sitä kohti." -- Turkmenbashi, kaikkien turkmeenien ja diktaattoripörssien isä.',
        'alt': 'Turkmenbashin patsas kääntyneenä kohti Diktaattoripörssiä'
    },

    {
        'image': require('./slider/isa-ja-poika-kim.jpg'),
        'caption': '"Jos Diktaattoripörssin ikuisesta puhemiehestä Pekkiksestä tehtäisiin vastaavanlainen patsas hänen ansaitsemassaan mittakaavassa, pronssi taitaisi loppua Pohjois-Koreasta kesken. Ellei koko maailmasta." -- isä ja poika Kim',
        'alt': 'Isä ja poika Kim ikuistettuna pronssiin'
    },
];


export default function Gallery(props) {

    const entry = entries[props.entry];

    return (
        <div className="pure-u-1-1">
            <div className="box margined">
                <div id="slider">

                    <div className="scrollable">
                        <div className="item">
                            <img alt={entry.alt} src={entry.image}/>

                            <div className="caption">
                                {entry.caption}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



