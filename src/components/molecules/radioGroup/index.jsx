import React from 'react'
import { ErrorMessage, Label } from '../../atoms'

export const RadioGroup = ({ children, label, name, errors }) => {
    return (
        <div className="input-section">
            <Label>{label}</Label>
            <div className="radio-group">
                {children}
            </div>
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}
