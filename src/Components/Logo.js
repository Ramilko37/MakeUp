import React from 'react';
import styled, {css} from 'styled-components'
import { render, screen } from '@testing-library/react';

const Logo = styled.h3`
  max-width: 100px;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300;
  color: #6D5F67;
  font-size: 20px;
  line-height: 25px;
  margin: 0;
    @media screen and (max-width: 375px){
      width: 100px;
      margin: 44px 0 15px 16px;
    }
  
  `;

<Logo>

</Logo>

export default Logo;
