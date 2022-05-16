import * as React from 'react';
import { StyledButton, ButtonText } from './styles';

interface ButtonTypes {
  onPress?: () => void;
  type: 'primary' | 'secondary';
  fill: boolean;
}

const Button: React.FC<ButtonTypes> = ({ children, onPress, type, fill }) => (
  <StyledButton onPress={onPress} type={type} fill={fill}>
    <ButtonText type={type}>{children}</ButtonText>
  </StyledButton>
);

export default Button;
