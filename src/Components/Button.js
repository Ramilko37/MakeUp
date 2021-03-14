import React from 'react';
import styled, {css} from 'styled-components'
import { render, screen } from '@testing-library/react';
import images from "../utils/images";


const Button = styled.button`
  width: 22px;
  height: 22px;
  margin: 27px 23px 27px 0;
  outline: none;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  border: none;
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
  color: #6D5F67;
`;

const ButtonCallMe = styled(Button)`
  width: 287px;
  height: 73px;
  background-color: #CBB387;
  margin: 0;
  color: #FFFFFF;
`;

<Button>
</Button>

export {Button,
    ButtonTelegram,
    ButtonInstagram,
    ButtonWhatsapp,
    ButtonPhone,
    ButtonCallMe
};