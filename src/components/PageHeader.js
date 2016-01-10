import React from 'react';

export default function PageHeader(props) {

    return (
        <header className="pure-u-1-1 page-header">
            {props.children}
        </header>
    );
};
