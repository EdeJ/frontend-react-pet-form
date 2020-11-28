import React from 'react'

export const Label = ({ children, name, required }) => {
    return (
        <label htmlFor={name}>{children} {required && <span>*</span>}</label>
    )
}
