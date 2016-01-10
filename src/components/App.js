import React from 'react';
import Header from './Header';

export default class App extends React.Component {

    static contextTypes = {
        history: React.PropTypes.object,
    };

    render() {

        console.log(this.context, 'app context');

        const { adi, setAdisMood } = this.props;

        return (
            <div id="sizer">
                <div id="container">

                    <Header adi={adi} setAdisMood={setAdisMood} />

                    <div className="main-content">
                        {this.props.children}
                    </div>

                </div>
            </div>
        );
    }

    componentDidMount() {

        const { setAdisMood } = this.props;

        this.interval = setInterval(() => {

            const rand = Math.floor(Math.random() * 100 + 1);

            if (rand <= 80) {
                setAdisMood('angry');
            } else if (rand <= 90) {
                setAdisMood('happy');
            } else {
                setAdisMood('stare');
            }

        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}
