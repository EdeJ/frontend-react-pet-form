import './App.css';
import { useForm } from "react-hook-form";
import Input from './components/atoms/Input';
import Label from './components/atoms/Label';

function App() {

  const onSubmit = () => {
    console.log('FORM SUBMITTED');
  }

  const { register, handleSubmit, watch, errors } = useForm();

  const newName = watch("name");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label name="Voornaam" />
      <Input
        name="Voornaam"
        fieldRef={register({ required: { value: true, message: 'TEST MESSAGE' } })}
        errors={errors}
      />
      {/* <Label name="Achternaam" />
      <Input
        name="Achternaam"
        fieldRef={register({ required: true })}
        errors={errors}
      /> */}
      {/* <input name="name" defaultValue="" ref={register} />
      <label>Wachtwoord?</label>
      <input
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      {newName && (
        <div>
          <label>{`Verstuur je aanvraag ${newName}`}</label>
          <input type="submit" />
        </div>
      )} */}
      <input type="submit" />

    </form>
  );
}

export default App;
