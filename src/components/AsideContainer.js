import React from 'react';

export default function AsideContainer(props) {

    return (
        <aside className="pure-u-1-3">
            {props.children}
        </aside>
    );
};
