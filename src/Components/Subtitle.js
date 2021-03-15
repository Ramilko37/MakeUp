import React from 'react';
import styled, {css} from 'styled-components';

const Subtitle = styled.h6`
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 8px;
  /* text/headings */
  color: #4C4248;
  width: ${props => props.titleWidth || ''};
  margin: ${props => props.titleMargin || ''};
  text-align: ${props => props.textalignMargin || ''};;
`;

const PricesSubtitle = styled(Subtitle)`
          font-family: Merriweather;
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          line-height: 35px;
          text-align: center;
          /* text/headings */
          color: #4C4248;
`;

<Subtitle></Subtitle>

export {
    Subtitle,
    PricesSubtitle,
    }