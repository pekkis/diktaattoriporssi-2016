import React from 'react';

export default function ContentContainer(props) {

    return (
        <section className="pure-u-2-3">
            {props.children}
        </section>
    );
};
