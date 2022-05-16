import React, { FC } from 'react';
import Input from './Input';

interface WrapperTypes {
  label: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  keyboardType?: 'numeric' | 'email-address';
  secureTextEntry?: boolean;
}
const Wrapper: FC<WrapperTypes> = ({
  label,
  inputValue,
  setInputValue,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <Input
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      value={inputValue}
      setInputValue={setInputValue}
      label={label}
    />
  );
};

export default Wrapper;
