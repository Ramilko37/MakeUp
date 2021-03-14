import React from 'react';
import styled, {css} from 'styled-components';
import images from "../utils/images";

const Portrait = styled.div`
    display: inline;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${props => props.portrait || ''};
  width: 580px;
  height: 730px;
  
    `;

<Portrait></Portrait>

export default Portrait;

