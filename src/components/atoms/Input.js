import React from 'react';

export const Input = ({ name, type, fieldRef }) => {

    return (
        <input
            type={type}
            id={name}
            name={name}
            ref={fieldRef}
        />
    )
}

