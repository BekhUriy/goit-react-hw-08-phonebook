// Register.js
import React, { useState } from 'react';
import RegistrationComponent from './RegistrationComponent';

const Register = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistrationSuccess = () => {
    setRegistrationSuccess(true);
    // Додаткові дії після успішної реєстрації, наприклад, перенаправлення на іншу сторінку
  };

  return (
    <div>
      {registrationSuccess ? (
        <p>Реєстрація пройшла успішно. Тепер ви можете увійти.</p>
      ) : (
        <RegistrationComponent
          onRegistrationSuccess={handleRegistrationSuccess}
        />
      )}
    </div>
  );
};

export default Register;
