import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  align-items: center;
`;

export const GoalsNumber = styled(Text)`
  font-weight: 400;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.light};
`;

export const IncrementButton = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => `${theme.colors.lightGreen}44`};
  border-radius: 4px;
`;

export const Plus = styled(Text).attrs({ children: '+' })`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.lightGreen};
`;

export const TeamName = styled(Text)`
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightGreen};
`;

export const Loading = styled(ActivityIndicator)``;
