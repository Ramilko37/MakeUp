import React from 'react';
import styled, {css} from 'styled-components'
import images from "../../utils/images";


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
  background: url(${(images.telegram)});
  margin: ${props => props.margin || ''};
`;

const ButtonInstagram = styled(Button)`
  background-image: url(${images.instagram});
  margin: ${props => props.margin || ''};
`;

const ButtonWhatsapp = styled(Button)`
  background-image: url(${images.whatsapp});
  margin: ${props => props.margin || ''};
`;

const ButtonPhone = styled(Button)`
  width: auto;
  color: #6D5F67;
`;

const ButtonCallme = styled(Button)`
  width: 287px;
  height: 73px;
  background-color: #CBB387;
  margin: 0;
  color: #FFFFFF;
`;

const ButtonContact = styled(Button)`
  width: 171px;
  height: 57px;
  border: 2px solid #CBB387;
  box-sizing: border-box;
  color: #CBB387;
  margin: 6px 0 0 0;
`;

<Button>
</Button>

export {Button,
    ButtonTelegram,
    ButtonInstagram,
    ButtonWhatsapp,
    ButtonPhone,
    ButtonCallme,
    ButtonContact,
};