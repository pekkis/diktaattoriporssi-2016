import React from 'react';

export default function Image(props) {
    const { src, version, ...rest } = props;
    return (
        <img src={src.replace('{{version}}', version)} {...rest} />
    );
}
