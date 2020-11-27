import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage, Input, Label } from '../../atoms';

export const NumberInput = ({ name, label, fieldRef }) => {
    const { errors } = useFormContext();
    return (
        <div className="input-section">
            <Label name={name}>{label}</Label>
            <Input type="number" name={name} fieldRef={fieldRef} />
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}
