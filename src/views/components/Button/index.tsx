import * as React from 'react';

import Button from './Button';

interface WrapperTypes {
  onPress?: () => void;
  type?: 'primary' | 'secondary';
  fill?: boolean;
}
const Wrapper: React.FC<WrapperTypes> = ({
  children,
  onPress,
  type = 'primary',
  fill = false,
}) => {
  return (
    <Button onPress={onPress} type={type} fill={fill}>
      {children}
    </Button>
  );
};

export default Wrapper;
