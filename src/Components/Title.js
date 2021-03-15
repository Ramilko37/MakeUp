import React from 'react';
import styled, {css} from 'styled-components'
import { render, screen } from '@testing-library/react';
import images from '../utils/images';

const Title = styled.h3`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 126.6%;
  /* or 51px */
  letter-spacing: 0.01em;
  /* text/headings */
  color: #4C4248;
  width: ${props => props.width || '663px'};
  margin: ${props => props.margin || ''};
  text-align: ${props => props.textalignMargin || ''};;
`;

<Title> </Title>

export default Title;