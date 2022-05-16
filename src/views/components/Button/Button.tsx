import * as React from 'react';
import { StyledButton, ButtonText } from './styles';

interface ButtonTypes {
  onPress?: () => void;
  type: 'primary' | 'secondary';
}

const Button: React.FC<ButtonTypes> = ({ children, onPress, type }) => (
  <StyledButton onPress={onPress} type={type}>
    <ButtonText type={type}>{children}</ButtonText>
  </StyledButton>
);

export default Button;
