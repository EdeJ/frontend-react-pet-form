import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../../atoms'
import { CheckBox, NumberInput, RadioGroup, RadioInput, TextArea, TextInput } from '../../molecules'
import './formStyles.css'



export const PetForm = () => {

    const { ...methods } = useForm();

    const pets = [
        { value: 'cat', label: 'Kat' },
        { value: 'dog', label: 'Hond' },
        { value: 'hamster', label: 'Hamster' },
        { value: 'mouse', label: 'Mouse' },
        { value: 'other', label: 'Anders' }
    ]

    const currentPet = methods.watch('pet');

    const onSuccess = (formData) => {
        console.log(formData)
    }

    const onError = (errorList) => {
        console.log(errorList);
    }

    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSuccess, onError)}>
                <TextInput
                    label="Voornaam"
                    name="name"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Er is geen voornaam ingevuld."
                        }
                    })}
                />
                <TextInput
                    label="Achternaam"
                    name="lastName"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Er is geen achternaam ingevuld."
                        }
                    })}
                />
                <NumberInput
                    label="Leeftijd"
                    name="age"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Er is geen leeftijd ingevuld."
                        },
                        min: {
                            value: 18,
                            message: "Je moet minimaal 18 jaar zijn."
                        }
                    })}
                />
                <TextInput
                    label="Postcode"
                    name="zipCode"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Er is geen postcode ingevuld."
                        },
                        pattern: {
                            value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                            message: "Postcode is niet geldig."
                        }
                    })}
                />
                <TextInput
                    label="Huisnummer"
                    name="houseNumber"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Er is geen huisnummer ingevuld."
                        },
                        maxLength: {
                            value: 8,
                            message: "Huisnummer is te lang"
                        }
                    })}
                />

                <RadioGroup name="pet" errors={methods.errors} label="Selecteer je favoriete huisdier:">
                    {pets.map(pet => (
                        <RadioInput
                            key={pet.value}
                            label={pet.label}
                            name="pet"
                            value={pet.value}
                            fieldRef={methods.register({ required: { value: true, message: 'Er is geen huisdier geselecteerd.' } })}
                        />
                    ))}
                    {currentPet === 'other' ? (
                        <TextInput
                            label="Ander huisdier"
                            fieldRef={methods.register({
                                required: {
                                    value: true,
                                    message: "Ander huisdier is verplicht"
                                }
                            })}
                            name="other-pet"
                        />
                    ) : methods.unregister('other-pet')}
                </RadioGroup>
                <TextArea label="Opmerking" name="comment" fieldRef={methods.register} />
                <CheckBox
                    name="conditions"
                    label="Ik ga akkoord met de voorwaarden"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Je dient akkoord te gaan met de voorwaarden"
                        }
                    })}
                />
                <Button>Verzenden</Button>
            </form>
        </FormProvider>
    )
}
