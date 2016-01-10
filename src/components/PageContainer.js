import React from 'react';

export default function PageContainer(props) {

    return (
        <section className="pure-g" id={props.id}>
            {props.children}
        </section>
    );
};
