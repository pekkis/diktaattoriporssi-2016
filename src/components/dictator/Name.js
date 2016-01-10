import React from 'react';

export default function Name({identity}) {
    return (
        <span className="dictator-name">{identity.displayName}</span>
    );
}
