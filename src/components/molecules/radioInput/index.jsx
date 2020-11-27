import React from 'react'
import { Input, Label } from '../../atoms'

export const RadioInput = ({ label, name, value, fieldRef }) => {
    return (
        <div>
            <Label name={name}>{label}</Label>
            <Input type="radio" name={name} fieldRef={fieldRef} value={value} />
        </div>
    )
}

