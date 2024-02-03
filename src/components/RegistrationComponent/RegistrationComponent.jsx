// RegistrationComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationComponent = ({ onRegistrationSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        formData
      );
      if (response.data) {
        console.log(response.data);
      } else {
        console.error('Response data is undefined');
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Ім'я"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Електронна пошта"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={handleInputChange}
      />
      <button onClick={handleRegistration}>Зареєструватися</button>
    </div>
  );
};

export default RegistrationComponent;
