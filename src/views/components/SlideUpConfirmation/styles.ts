import { View, Text, ScrollView, Animated } from 'react-native';
import styled from 'styled-components/native';

export const EmptySpace = styled(ScrollView)``;

export const TouchableArea = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.grayLayer};
`;

export const Container = styled(Animated.View)`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 4px 4px 0 0;

  width: 100%;
  padding: 40px;

  position: fixed;
  bottom: 0;
  z-index: 100;
`;

export const Question = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const Footer = styled(View)`
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 32px;
`;

export const ButtonWrapper = styled(View)`
  width: 50%;
`;
