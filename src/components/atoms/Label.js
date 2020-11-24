import React from 'react'

function Label({ name }) {
    return (
        <label htmlFor={name}>{name}</label>
    )
}

export default Label
