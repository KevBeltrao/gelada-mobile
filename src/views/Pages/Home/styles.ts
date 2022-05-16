import styled from 'styled-components';
import { View } from 'react-native';
import LogoImg from '../../theme/assets/icons/assets/logo.svg';

export const Container = styled(View)`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Logo = styled(LogoImg).attrs({
  width: '100%',
})``;
