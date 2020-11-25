import React from 'react';

export const Input = ({ name, type, fieldRef }) => {

    // console.log(errors);
    return (
        <input
            type={type}
            id={name}
            name={name}
            ref={fieldRef}
        />
    )
}

