import React, { FC, useState, useContext } from 'react';

import {
  GithubUserContext,
  actions,
} from '../../../application/githubUserProvider';
import Home from './Home';

const Wrapper: FC = () => {
  const { githubUser, githubUserDispatch } = useContext(GithubUserContext);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onPress = async () => {
    setIsLoading(true);

    try {
      setHasError(false);
      await githubUserDispatch({
        type: actions.GET_USER,
        payload: { login: inputValue },
      });
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
      setInputValue('');
    }
  };

  const cleanData = () => {
    githubUserDispatch({ type: actions.REMOVE_USER, payload: {} });
  };

  return (
    <Home
      inputValue={inputValue}
      setInputValue={setInputValue}
      githubUser={githubUser}
      onPress={onPress}
      cleanData={cleanData}
      isLoading={isLoading}
      hasError={hasError}
    />
  );
};

export default Wrapper;
