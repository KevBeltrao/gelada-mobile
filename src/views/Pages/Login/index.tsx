import React, { FC, useContext, useState } from 'react';
import Login from './Login';

import {
  AuthenticationContext,
  actions,
} from '../../../application/loginProvider';
import { CheckAuthorizationContext } from '../../../../App';

const Wrapper: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const { userDispatch } = useContext(AuthenticationContext);
  const checkAuthorization = useContext(CheckAuthorizationContext);

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      await userDispatch({
        type: actions.AUTHENTICATION,
        payload: {
          email: emailInput,
          password: passwordInput,
        },
      });

      await checkAuthorization();
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setHasError(false);
      }, 5000);
    }
  };

  return (
    <Login
      isLoading={isLoading}
      hasError={hasError}
      submit={handleLogin}
      emailInput={emailInput}
      setEmailInput={setEmailInput}
      passwordInput={passwordInput}
      setPasswordInput={setPasswordInput}
    />
  );
};

export default Wrapper;
