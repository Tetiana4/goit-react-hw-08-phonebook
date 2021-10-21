import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import { Spinner } from '../../Spinner/Spinner';
import * as actions from '../../redux/contacts/actions';
import { Label, Form, Button, Input } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const dispatch = useDispatch();
  const propSubmit = value => dispatch(actions.addContact(value));
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    const resetForm = () => {
      setName('');
      setNumber('');
    };

    event.preventDefault();
    propSubmit({ name, number });
    resetForm();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            placeholder="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            placeholder="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </Label>
        <Button type="submit">'Add contact'</Button>
      </Form>
    </div>
  );
};
