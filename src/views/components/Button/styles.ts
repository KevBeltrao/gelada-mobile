import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const StyledButton = styled(TouchableOpacity)`
  background-color: #8aacd6;
  padding: 8px;
  align-items: center;
  align-self: center;
  border-radius: 4px;
`;

export const ButtonText = styled(Text)`
  color: #133389;
  font-size: 14px;
  font-weight: 700;
`;
