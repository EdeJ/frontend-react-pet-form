import React from 'react';

function Input({ name, fieldRef, errors }) {

    console.log(errors);
    return (
        <>
            <input
                id={name}
                name={name}
                ref={fieldRef}
            />
            {errors[name] && <p>This {errors[name].message} </p>}
        </>
    )
}

export default Input
