// LoginComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login', // Оновлений шлях
        formData
      );
      console.log(response.data);
      // Викликаємо функцію колбека для успішного входу
      onLoginSuccess();
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
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
      <button onClick={handleLogin}>Вхід</button>
    </div>
  );
};

export default LoginComponent;
