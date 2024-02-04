import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import RegistrationComponent from './RegistrationComponent/RegistrationComponent';
import LoginComponent from './LoginComponent/LoginComponent';
import {
  fetchContacts,
  addContact,
  deleteContact,
  setFilter,
} from './redux/contactsSlice';

const Heading = styled.h1`
  font-size: 2em;
  color: #333;
`;

const Navigation = styled.nav`
  margin-bottom: 20px;
`;

const NavigationLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  font-size: 1.2em;
  color: #333;
`;

const AppContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactHandler = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const deleteContactHandler = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilterHandler = e => {
    dispatch(setFilter(e.target.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name?.toLowerCase().includes(normalizedFilter) ||
        contact.number?.includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Router basename="/goit-react-hw-08-phonebook">
      <AppContainer>
        <Navigation>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
          <NavigationLink to="/register">Register</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink>
        </Navigation>
        <Heading>Phonebook</Heading>
        <Routes>
          <Route
            path="/contacts"
            element={
              <>
                <ContactForm onSubmit={addContactHandler} />
                <Heading>Contacts</Heading>
                <Filter value={filter} onChange={changeFilterHandler} />
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <ContactList
                    contacts={visibleContacts}
                    onDelete={deleteContactHandler}
                  />
                )}
              </>
            }
          />
          <Route path="/register" element={<RegistrationComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
