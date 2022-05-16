import * as React from 'react';
import { OutlinedInput } from './styles';

interface InputTypes {
  label: string;
  value: string;
  setInputValue: (value: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'numeric' | 'email-address';
}

const Input: React.FC<InputTypes> = ({
  label,
  value,
  setInputValue,
  keyboardType,
  secureTextEntry,
}) => (
  <OutlinedInput
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    label={label}
    value={value}
    onChangeText={setInputValue}
  />
);

export default Input;
