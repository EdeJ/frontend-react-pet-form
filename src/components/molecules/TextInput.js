import React from 'react'
import { ErrorMessage } from '../atoms/ErrorMessage'
import { Input } from '../atoms/Input'
import { Label } from '../atoms/Label'

export const TextInput = ({ name, label, type, fieldRef, errors }) => {
    return (
        <div>
            <Label name={name}>{label}</Label>
            <Input type={type} name={name} fieldRef={fieldRef} />
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}
