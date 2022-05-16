import * as React from 'react';

import Button from './Button';

interface WrapperTypes {
  onPress?: () => void;
}
const Wrapper: React.FC<WrapperTypes> = ({ children, onPress }) => {
  return <Button onPress={onPress}>{children}</Button>;
};

export default Wrapper;
