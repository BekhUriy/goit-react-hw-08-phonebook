// Login.js
import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import UserMenu from '../UserMenu/UserMenu'; // Додаємо імпорт UserMenu

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLoginSuccess = () => {
    setLoginSuccess(true);
    // Додаткові дії після успішного входу, наприклад, перенаправлення на іншу сторінку
  };

  return (
    <div>
      {loginSuccess ? (
        <div>
          <UserMenu /> {/* Додаємо UserMenu після успішного входу */}
          <p>Ви успішно увійшли в систему.</p>
        </div>
      ) : (
        <LoginComponent onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default Login;
