import React, { FC } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {
  Container,
  Logo,
  Title,
  ScrollContainer,
  InputWrapper,
  Loading,
  ErrorMessage,
} from './style';

interface LoginPropsTypes {
  emailInput: string;
  setEmailInput: (value: string) => void;
  passwordInput: string;
  setPasswordInput: (value: string) => void;
  submit: () => void;
  isLoading: boolean;
  hasError: boolean;
}

const Login: FC<LoginPropsTypes> = ({
  isLoading,
  hasError,
  emailInput,
  setEmailInput,
  passwordInput,
  setPasswordInput,
  submit,
}) => {
  return (
    <Container>
      <ScrollContainer>
        <Logo />
        <Title>LogIn</Title>

        <InputWrapper>
          <Input
            value={emailInput}
            setInputValue={setEmailInput}
            label="Email"
            keyboardType="email-address"
          />
          <Input
            value={passwordInput}
            setInputValue={setPasswordInput}
            label="Senha"
            secureTextEntry
          />
        </InputWrapper>

        <Button
          disabled={isLoading}
          type="primary"
          fill={false}
          onPress={submit}
        >
          Entrar
        </Button>

        {isLoading && <Loading />}
        {hasError && (
          <ErrorMessage>
            Ocorreu um erro, verifique se seu login está correto e tente
            novamente mais tarde.
          </ErrorMessage>
        )}
      </ScrollContainer>
    </Container>
  );
};

export default Login;
