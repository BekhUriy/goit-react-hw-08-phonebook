// UserMenu.js
import React from 'react';

const UserMenu = ({ email, onLogout }) => {
  return (
    <div>
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
