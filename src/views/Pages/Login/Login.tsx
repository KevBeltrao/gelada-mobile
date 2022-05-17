import React, { FC } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Container, Logo, Title, ScrollContainer, InputWrapper } from './style';

interface LoginPropsTypes {
  emailInput: string;
  setEmailInput: (value: string) => void;
  passwordInput: string;
  setPasswordInput: (value: string) => void;
  submit: () => void;
}

const Login: FC<LoginPropsTypes> = ({
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

        <Button type="primary" fill={false} onPress={submit}>
          Entrar
        </Button>
      </ScrollContainer>
    </Container>
  );
};

export default Login;
