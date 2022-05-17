import React, { FC, useState } from 'react';
import Login from './Login';

const Wrapper: FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLogin = () => {};

  return (
    <Login
      submit={handleLogin}
      emailInput={emailInput}
      setEmailInput={setEmailInput}
      passwordInput={passwordInput}
      setPasswordInput={setPasswordInput}
    />
  );
};

export default Wrapper;
