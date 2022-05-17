import React, { FC, useContext, useState } from 'react';
import Login from './Login';

import {
  AuthenticationContext,
  actions,
} from '../../../application/loginProvider';

const Wrapper: FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const { userDispatch } = useContext(AuthenticationContext);

  const handleLogin = async () => {
    try {
      await userDispatch({
        type: actions.AUTHENTICATION,
        payload: {
          email: emailInput,
          password: passwordInput,
        },
      });
    } catch (error) {
      return error;
    }
  };

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
