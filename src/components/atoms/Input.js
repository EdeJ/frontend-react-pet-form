import React from 'react';

export const Input = ({ name, type, fieldRef, errors }) => {

    console.log(errors);
    return (
        <input
            type={type}
            id={name}
            name={name}
            ref={fieldRef}
        />
    )
}

