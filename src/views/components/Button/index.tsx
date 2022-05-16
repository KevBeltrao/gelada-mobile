import * as React from 'react';

import Button from './Button';

interface WrapperTypes {
  onPress?: () => void;
  type?: 'primary' | 'secondary';
}
const Wrapper: React.FC<WrapperTypes> = ({
  children,
  onPress,
  type = 'primary',
}) => {
  return (
    <Button onPress={onPress} type={type}>
      {children}
    </Button>
  );
};

export default Wrapper;
