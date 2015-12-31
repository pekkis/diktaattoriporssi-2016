import React from 'react';

const moods = {
    angry: require('./angry-adi.svg'),
    happy: require('./happy-adi.svg'),
    stare: require('./stare-adi.svg'),
};

console.log(moods, 'adis moods');

class Adi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mood: 'happy'
        };

        this.setMood = this.setMood.bind(this);
    }

    render() {

        const { mood } = this.state;

        return (
            <div>
                <img onMouseEnter={() => this.setMood('happy')}src={moods[mood]} />
            </div>
        );

    }

    setMood(mood) {
        this.setState({
            mood: mood
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setMood('angry');
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Adi;
