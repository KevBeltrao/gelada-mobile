import * as React from 'react';
import { Animated } from 'react-native';
import SlideUpConfirmation from './SlideUpConfirmation';

interface WrapperTypes {
  title?: string;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  shouldShow?: boolean;
}

const { useRef, useEffect } = React;

const Wrapper: React.FC<WrapperTypes> = ({
  title = '',
  okText = 'Confirmar',
  cancelText = 'Cancelar',
  onOk = () => {},
  onCancel = () => {},
  shouldShow = false,
}) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const show = () => {
    Animated.spring(slideAnimation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const hide = () => {
    Animated.timing(slideAnimation, {
      toValue: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (shouldShow) {
      show();
    } else {
      hide();
    }
  }, [shouldShow]);

  return (
    <SlideUpConfirmation
      title={title}
      okText={okText}
      cancelText={cancelText}
      onOk={onOk}
      onCancel={onCancel}
      slideAnimation={slideAnimation}
      shouldShow={shouldShow}
    />
  );
};

export default Wrapper;
