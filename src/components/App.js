import React from 'react';

// You can use jss directly too!
import jss from 'jss'
import vendorPrefixer from 'jss-vendor-prefixer'
jss.use(vendorPrefixer);

export default class App extends React.Component {

    render() {

        return (
            <div>
                <h1>
                    <img src={require('../images/top-secret.png')} />
                </h1>

                {this.props.children}

            </div>
        );
    }
}
