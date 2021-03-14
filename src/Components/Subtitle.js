import React from 'react';
import styled, {css} from 'styled-components';

const Subtitle = styled.h6`
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 8px 0;
  /* text/headings */
  color: #4C4248;
  width: ${props => props.titleWidth || ''};
  margin: ${props => props.titleMargin || ''};
  text-align: ${props => props.textalignMargin || ''};;
`;

<Subtitle> </Subtitle>

export default Subtitle;