import React, { FC, useState } from 'react';
import SlideUpConfirmation from '../../components/SlideUpConfirmation';
import Button from '../../components/Button';
import { Container, Logo } from './styles';

const Home: FC = () => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <Container>
      <Logo />

      <Button onPress={() => setShouldShow(!shouldShow)}>
        Toggle Confirmation
      </Button>

      <SlideUpConfirmation
        title="Tem certeza que deseja finalizar a partida?"
        okText="Sim"
        cancelText="Cancelar"
        shouldShow={shouldShow}
        onCancel={() => setShouldShow(false)}
      />
    </Container>
  );
};

export default Home;
