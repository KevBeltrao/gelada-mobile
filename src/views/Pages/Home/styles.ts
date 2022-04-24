import styled, { css } from 'styled-components';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export const Container = styled(View)`
  background-color: #5500ff;
  padding: 5px 10px;
  border-radius: 5px;

  width: 90%;
  height: 70%;
`;

export const Title = styled(Text)`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto;
`;

export const LoginInput = styled(TextInput)`
  background: #ffffff66;
  color: #fff;
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
`;

export const SubmitButton = styled(TouchableOpacity)`
  margin-top: 8px;
  align-items: center;
  padding: 8px;
  border-radius: 5px;

  ${({ negative }: { negative?: boolean }) =>
    negative
      ? css`
          background-color: #5500ff;
          border: #fff;
        `
      : css`
          background-color: #fff;
          border: #5500ff;
        `}
`;

export const ButtonText = styled(Text)`
  color: ${({ negative }: { negative?: boolean }) =>
    negative ? '#fff' : '#5500ff'};
  font-size: 16px;
  font-weight: bold;
`;

export const GithubUserImage = styled(Image)`
  width: 100%;
  height: 50%;
  margin-top: 16px;
`;
