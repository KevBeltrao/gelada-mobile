import React, { FC, Dispatch, SetStateAction } from 'react';

import { githubUserTypes } from '../../../application/githubUserProvider';
import {
  Container,
  Title,
  LoginInput,
  SubmitButton,
  ButtonText,
  GithubUserImage,
} from './styles';

interface DemoTypes {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  githubUser: githubUserTypes.GithubUserType;
  onPress: () => void;
  cleanData: () => void;
  isLoading: boolean;
  hasError: boolean;
}

const Demo: FC<DemoTypes> = ({
  inputValue,
  setInputValue,
  githubUser,
  onPress,
  cleanData,
  isLoading,
}) => (
  <Container>
    <Title>Demo</Title>

    <LoginInput value={inputValue} onChangeText={setInputValue} />

    <SubmitButton onPress={onPress} disabled={isLoading}>
      <ButtonText>{isLoading ? 'Carregando...' : 'Buscar'}</ButtonText>
    </SubmitButton>

    <SubmitButton negative onPress={cleanData}>
      <ButtonText negative>Limpar dados</ButtonText>
    </SubmitButton>

    {githubUser.avatar_url && (
      <GithubUserImage source={{ uri: githubUser.avatar_url }} />
    )}
  </Container>
);

export default Demo;
