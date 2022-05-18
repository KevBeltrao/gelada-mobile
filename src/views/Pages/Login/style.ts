import styled from 'styled-components';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import LogoImg from '../../theme/assets/icons/assets/logo.svg';

export const ScrollContainer = styled(ScrollView).attrs({
  flexGrow: 1,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  flex: 1;
`;

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.colors.dark};

  padding-top: 50px;
  flex: 1;
`;

export const Logo = styled(LogoImg).attrs({
  width: '100%',
})``;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-size: ${({ theme }) => theme.fonts.title.size};
  color: ${({ theme }) => theme.colors.light};
`;

export const InputWrapper = styled(View)`
  width: 100%;
  align-items: center;

  margin: 20px 0 50px 0;
`;

export const Loading = styled(ActivityIndicator)`
  margin-top: 20px;
`;

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.lightRed};

  margin-top: 20px;
  width: 70%;
  text-align: center;
`;
