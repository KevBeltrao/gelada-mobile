import styled from 'styled-components/native';
import { TextInput } from '@react-native-material/core';

export const OutlinedInput = styled(TextInput).attrs(({ theme }) => ({
  variant: 'filled',
  color: theme.colors.dark,
}))`
  width: 80%;
`;
