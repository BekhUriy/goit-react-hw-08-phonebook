import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectContact } from '../../redux/selectors';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

const ContactsForm = styled.div`
  margin-top: 20px;
`;

const ContactsItem = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const ifContactExist = contacts => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (ifContactExist(contacts)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    dispatch(addContact(contact));
    reset();
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <Label htmlFor="nameInputId">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <Label htmlFor="numberInputId">Number</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
        <Button type="submit">Add contact</Button>
      </FormWrapper>
      <ContactsForm>
        <ContactsItem>Contacts</ContactsItem>
      </ContactsForm>
    </>
  );
};
