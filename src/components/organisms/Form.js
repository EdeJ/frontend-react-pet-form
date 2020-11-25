import React from 'react'
import { useForm } from 'react-hook-form';
import { TextInput } from '../molecules/TextInput';


export const Form = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = () => {
        console.log('FORM SUBMITTED');
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                label="Voornaam"
                name="name"
                fieldRef={register({
                    required: {
                        value: true,
                        message: "Verplicht veld"
                    }
                })}
                errors={errors}
            />
            <input type="submit" />
        </form>
    )
}
