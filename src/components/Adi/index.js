import React from 'react';
import { Link } from 'react-router';

const moods = {
    angry: require('./angry-adi.svg'),
    happy: require('./happy-adi.svg'),
    stare: require('./stare-adi.svg'),
};

class Adi extends React.Component {

    render() {
        const { mood, setMood } = this.props;
        return (
            <div className="adi">
                <Link to="/">
                    <img onMouseEnter={setMood.bind(null, 'happy')} src={moods[mood]} />
                </Link>
            </div>
        );
    }
}

export default Adi;
