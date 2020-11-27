import React from 'react'
import { Label } from '../../atoms'


export const TextArea = ({ label, name, fieldRef }) => {
    return (
        <div>
            <Label name={name}>{label}</Label>
            <textarea ref={fieldRef} name={name} id={name} />
        </div>
    )
}