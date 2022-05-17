import styled from 'styled-components';
import { ScrollView, Text, View } from 'react-native';
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
  height: 30%;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0 50px 0;
`;
