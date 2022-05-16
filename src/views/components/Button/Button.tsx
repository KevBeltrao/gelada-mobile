import * as React from 'react';
import { StyledButton, ButtonText } from './styles';

interface ButtonTypes {
  onPress?: () => void;
}

const Button: React.FC<ButtonTypes> = ({ children, onPress }) => (
  <StyledButton onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </StyledButton>
);

export default Button;
