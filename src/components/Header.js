import React from 'react';
import Adi from './Adi';
import MainMenu from './MainMenu';

export default function Header(props) {

    const { setAdisMood, adi } = props;

    return (
        <header class="pure-g">
            <div class="pure-u-1">
                <div id="bar">
                    <div>
                        <div>

                            <div id="user-container">
                                <div id="user">
                                </div>
                            </div>

                            <div id="container-adi">
                                <Adi mood={adi} setMood={setAdisMood} />
                            </div>

                            <div id="container-top">
                                <div id="top">
                                    <div id="logo">
                                        <h1>Diktaattoripörssi</h1>
                                    </div>
                                    </div>
                            </div>

                            <MainMenu />

                            <div id="ask-adi">

                                <div class="triangle-right left">
                                    <input type="text" class="addsearch" />
                                    <i class="fa fa-times"></i>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

    );


}
