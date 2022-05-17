import { TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledButton = styled(TouchableOpacity)`
  background-color: ${({ type, theme }) => {
    if (type === 'primary') {
      return theme.colors.lightBlue;
    }
    if (type === 'secondary') {
      return theme.colors.lightRed;
    }
    return theme.colors.lightBlue;
  }};
  padding: 8px;
  align-items: center;
  align-self: center;
  border-radius: 4px;
  ${({ fill }) =>
    fill &&
    css`
      width: 100%;
    `}
`;

export const ButtonText = styled(Text)`
  color: ${({ type, theme }) => {
    if (type === 'primary') {
      return theme.colors.darkBlue;
    }
    if (type === 'secondary') {
      return theme.colors.darkRed;
    }
    return theme.colors.darkBlue;
  }};
  font-size: 14px;
  font-weight: 700;
`;
