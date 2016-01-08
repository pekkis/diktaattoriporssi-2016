import React from 'react';
import { useSheet } from '../../services/jss';

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

        const { classes } = this.props.sheet;

        console.log(classes)

        return (
            <div>
                <img className={classes.img} onMouseEnter={() => this.setMood('happy')} src={moods[mood]} />
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

const styles = {
    img: {
        width: '20rem',
    }
};


export default useSheet(Adi, styles);
