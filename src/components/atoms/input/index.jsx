import React from 'react';

export const Input = ({ name, type, fieldRef, value }) => {

    return (
        <input type={type} id={name} name={name} ref={fieldRef} value={value} />
    )
}

