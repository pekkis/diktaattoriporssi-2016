import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router';

const menus = [
    {
        title: 'Etusivu',
        path: '/',
        indexOnly: true,
    },
    {
        title: 'Diktaattorit',
        path: '/diktaattorit',
        indexOnly: false,
    },
    {
        title: 'Propaganda',
        path: '/propaganda',
        indexOnly: true,
    },
];

export default function MainMenu(props, context) {

    console.log(context, 'main menu context');

    const { history } = context;

    console.log('/', history.isActive('/', null, true));
    console.log('propaganda', history.isActive('/propaganda'));

    return (
        <nav id="main-menu">
            <ul className="navigation">
                {menus.map((m, k) => {

                    const classes = cx({
                        active: history.isActive(m.path, null, m.indexOnly)
                    });

                    return (
                        <li key={k} className={classes}>
                            <Link to={m.path}>{m.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

MainMenu.contextTypes = {
    history: React.PropTypes.object
};
