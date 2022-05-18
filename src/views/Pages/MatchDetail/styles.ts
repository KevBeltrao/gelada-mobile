import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import GoalImage from '../../theme/assets/icons/assets/goal.svg';

export const Container = styled(View)`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.dark};
`;

export const Title = styled(Text)`
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.light};
`;

export const InnerContainer = styled(View)`
  width: 80%;
  align-items: center;
`;

export const ScoreContainer = styled(View)`
  flex-direction: row;
  margin-bottom: 100px;
`;

export const MultiplySign = styled(Text).attrs({
  children: '×',
})`
  margin-horizontal: 8px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.light};
  margin-horizontal: 16px;
`;

export const Image = styled(GoalImage).attrs({
  width: '100%',
})``;

export const Loading = styled(ActivityIndicator)``;
