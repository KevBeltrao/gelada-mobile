import * as React from 'react';
import { StyledButton, ButtonText } from './styles';

interface ButtonTypes {
  onPress?: () => void;
  type: 'primary' | 'secondary';
  fill: boolean;
  disabled: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonTypes> = ({
  children,
  onPress,
  type,
  fill,
  disabled,
}) => (
  <StyledButton disabled={disabled} onPress={onPress} type={type} fill={fill}>
    <ButtonText type={type}>{children}</ButtonText>
  </StyledButton>
);

export default Button;
