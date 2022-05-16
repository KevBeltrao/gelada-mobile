import Constants from 'expo-constants';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const SafeScreen = styled.View`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.default.family};
  font-size: ${({ theme }) => theme.fonts.default.size};
  background-color: ${({ theme }) => theme.colors.dark};

  padding-top: ${Number(
    Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  )}px;
`;
