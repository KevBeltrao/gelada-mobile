import * as React from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import Button from '../Button';
import {
  Container,
  Question,
  Footer,
  ButtonWrapper,
  EmptySpace,
  TouchableArea,
} from './styles';

interface WrapperTypes {
  title: string;
  okText: string;
  cancelText: string;
  onOk: () => void;
  onCancel: () => void;
  slideAnimation: Animated.Value;
  shouldShow: boolean;
}

const SlideUpConfirmation: React.FC<WrapperTypes> = ({
  title,
  okText,
  cancelText,
  onOk,
  onCancel,
  slideAnimation,
  shouldShow,
}) => (
  <>
    <EmptySpace />
    {shouldShow && (
      <TouchableWithoutFeedback onPress={onCancel}>
        <TouchableArea />
      </TouchableWithoutFeedback>
    )}

    <Container style={{ transform: [{ translateY: slideAnimation }] }}>
      <Question>{title}</Question>

      <Footer>
        <ButtonWrapper>
          <Button onPress={onOk} type="confirm" fill>
            {okText}
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button onPress={onCancel} type="transparent" fill>
            {cancelText}
          </Button>
        </ButtonWrapper>
      </Footer>
    </Container>
  </>
);

export default SlideUpConfirmation;
