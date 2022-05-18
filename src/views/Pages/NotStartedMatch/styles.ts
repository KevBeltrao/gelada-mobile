import { Text, View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import Whistleimg from '../../theme/assets/icons/assets/whistle.svg';

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light};

  align-items: center;
  justify-content: center;
`;

export const Whistle = styled(Whistleimg)`
  width: 100px;
`;

export const InnerContent = styled(View)`
  width: 80%;
  align-items: center;
`;

export const ScreenText = styled(Text)`
  color: ${({ theme }) => theme.colors.dark};
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

export const Loading = styled(ActivityIndicator)`
  margin-top: 20px;
`;
