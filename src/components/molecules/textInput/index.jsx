import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage, Input, Label } from '../../atoms'

export const TextInput = ({ name, label, fieldRef }) => {
    const { errors } = useFormContext();
    return (
        <div>
            <Label name={name}>{label}</Label>
            <Input type="text" name={name} fieldRef={fieldRef} />
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}
