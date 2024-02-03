// UpdateUserComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UpdateUserComponent = () => {
  const [updatedData, setUpdatedData] = useState({
    // оновлені дані користувача
  });

  const handleUpdateUser = async () => {
    try {
      const response = await axios.patch(
        'https://connections-api.herokuapp.com/users/:userId',
        updatedData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      {/* Форма для оновлення даних користувача */}
      <button onClick={handleUpdateUser}>Оновити дані</button>
    </div>
  );
};

export default UpdateUserComponent;
