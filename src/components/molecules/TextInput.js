import React from 'react'
import { ErrorMessage } from '../atoms/ErrorMessage'
import { Input } from '../atoms/Input'
import { Label } from '../atoms/Label'

export const TextInput = ({ name, label, fieldRef, errors }) => {
    return (
        <div>
            <Label name={name}>{label}</Label>
            <Input type="text" name={name} fieldRef={fieldRef} />
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}
