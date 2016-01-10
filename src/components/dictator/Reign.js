import React from 'react';
import Icon from 'react-fa';
import moment from 'moment';

export default function Name({reign}) {

    const reignFrom = moment(reign.start);
    const reignTo = moment(reign.end);

    return (
        <div className="reign">
            <Icon name="calendar" /> {reignFrom.format('D.M.YYYY')} - {reignTo.format('D.M.YYYY')} ({reign.duration.days} päivää)
        </div>
    );
}
