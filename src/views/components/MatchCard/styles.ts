import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const Touchable = styled(TouchableOpacity)``;

export const Container = styled(View)`
  width: 100%;
  padding: 10px 30px;
  background: ${({ theme }) => theme.colors.light};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TeamContainer = styled(View)`
  align-items: center;
  flex: 1;
`;

export const Circle = styled(View)`
  width: 23px;
  height: 23px;

  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme, red }) =>
    red ? theme.colors.lightRed : theme.colors.lightBlue};
`;

export const TeamLetter = styled(Text)`
  color: ${({ theme, red }) =>
    red ? theme.colors.darkRed : theme.colors.darkBlue};
  font-weight: 700;
  font-size: 14px;
`;

export const TeamText = styled(Text)`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 400;
  font-size: 12px;
`;

export const ScoreNumber = styled(Text)`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 400;
  font-size: 24px;
`;

export const MultiplySign = styled(Text).attrs({
  children: '×',
})`
  margin-horizontal: 8px;
`;
