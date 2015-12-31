import React from 'react';

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
