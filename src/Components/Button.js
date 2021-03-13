import React from 'react';
import styled, {css} from 'styled-components'
import { render, screen } from '@testing-library/react';
import images from "../utils/images";


const Button = styled.button`
  width: 22px;
  height: 22px;
  margin: 27px;
  border: 1px solid red;
  outline: none;
  background-image: url("");
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
`;

const ButtonTelegram = styled(Button)`
  background-image: url(${images.telegram});

`;

const ButtonInstagram = styled(Button)`
  background-image: url(${images.instagram});
`;

const ButtonWhatsapp = styled(Button)`
  background-image: url(${images.whatsapp});
`;

const ButtonPhone = styled(Button)`
  width: auto;
`;

    

<Button>
</Button>

export {Button,
    ButtonTelegram,
    ButtonInstagram,
    ButtonWhatsapp,
    ButtonPhone
};
