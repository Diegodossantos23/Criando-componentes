import React from 'react'
import { CardContainer } from './StyledCard';

const Card = () => {
  return (
    <CardContainer>
      <h3>Componentes:</h3>
      <p>Facilita em manter partes menores funcionando corretamente</p>
      <p>Você pode reutilizá-los, ou seja, menos código para se escrever</p>
    </CardContainer>
  );
}

export default Card;