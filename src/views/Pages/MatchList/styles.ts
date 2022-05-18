import { View, ActivityIndicator, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const InnerContainer = styled(View)`
  width: 80%;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  margin-vertical: 20px;
`;

export const Loading = styled(ActivityIndicator)``;

export const Gap = styled(View)`
  height: 10px;
`;
