import React from 'react'
import { ErrorMessage, Label } from '../../atoms'

export const RadioGroup = ({ children, label, name, errors }) => {
    return (
        <div>
            <Label>{label}</Label>
            {children}
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}
