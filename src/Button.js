import React from 'react';
import styled, {css} from 'styled-components'
import { render, screen } from '@testing-library/react';

const Button = styled.button`
    width: 20px;
  height: 20px;
  border: 1px solid red;
  margin: 27px;
`;

const ButtonTelegram = styled(Button)`
  background-image: url('./images/Union.svg');
  background-size: cover;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
    

<Button>
</Button>

export {Button,
    ButtonTelegram,
};
