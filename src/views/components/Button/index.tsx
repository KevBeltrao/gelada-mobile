import * as React from 'react';

import Button from './Button';

interface WrapperTypes {
  onPress?: () => void;
  type?: 'primary' | 'secondary' | 'confirm' | 'transparent';
  fill?: boolean;
  disabled: boolean;
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperTypes> = ({
  children,
  onPress,
  type = 'primary',
  fill = false,
  disabled = false,
}) => {
  return (
    <Button disabled={disabled} onPress={onPress} type={type} fill={fill}>
      {children}
    </Button>
  );
};

export default Wrapper;
