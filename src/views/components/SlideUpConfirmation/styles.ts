import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  background: ${({ theme }) => theme.colors.light};
  width: 100%;
  padding: 40px;

  position: fixed;
  bottom: 0;
`;

export const Question = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;
