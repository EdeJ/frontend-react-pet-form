import React from 'react'
import { useForm } from 'react-hook-form';
import { TextInput } from '../molecules/TextInput';


export const Form = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = () => {
        console.log('FORM SUBMITTED');
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                type="text"
                label="Voornaam"
                name="name"
                fieldRef={register({
                    required: {
                        value: true,
                        message: "Er is geen voornaam ingevuld."
                    }
                })}
                errors={errors}
            />
            <TextInput
                type="text"
                label="Achternaam"
                name="lastName"
                fieldRef={register({
                    required: {
                        value: true,
                        message: "Er is geen achternaam ingevuld."
                    }
                })}
                errors={errors}
            />
            <TextInput
                type="number"
                label="Leeftijd"
                name="age"
                fieldRef={register({
                    required: {
                        value: true,
                        message: "Er is geen leeftijd ingevuld."
                    },
                    min: {
                        value: 18,
                        message: "Je moet minimaal 18 jaar zijn."
                    }
                })}
                errors={errors}
            />
            <TextInput
                type="string"
                label="Postcode"
                name="zipCode"
                fieldRef={register({
                    required: {
                        value: true,
                        message: "Er is geen postcode ingevuld."
                    },
                    pattern: {
                        value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                        message: "Postcode is onjuist."
                    }
                })}
                errors={errors}
            />
            <TextInput
                type="string"
                label="Huisnummer"
                name="houseNumber"
                fieldRef={register({
                    required: {
                        value: true,
                        message: "Er is geen huisnummer ingevuld."
                    },
                    maxLength: {
                        value: 8,
                        message: "Huisnummer is te lang"
                    }
                })}
                errors={errors}
            />

            <p>Selecteer je favoriete huisdier:</p>
            <label htmlFor="pet">Kat</label>
            <input type="radio" id="cat" name="pet" value="cat" ref={register({
                required: {
                    value: true,
                    message: "Er is niets geselcteerd."
                }
            })} />
            <label htmlFor="pet">Hond</label>
            <input type="radio" id="dog" name="pet" value="dog" ref={register({
                required: {
                    value: true,
                    message: "Er is niets geselcteerd."
                }
            })} />
            <label htmlFor="hamster">Hamster</label>
            <input type="radio" id="hamster" name="pet" value="hamster" ref={register({
                required: {
                    value: true,
                    message: "Er is niets geselcteerd."
                }
            })} />
            <label htmlFor="other">Anders</label>
            <input type="radio" id="other" name="pet" value="other" ref={register({
                required: {
                    value: true,
                    message: "Er is niets geselcteerd."
                }
            })} />
            { errors.pet && errors.pet.message}


            <input type="submit" />
        </form>
    )
}
