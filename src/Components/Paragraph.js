import React from 'react';
import styled, {css} from 'styled-components';

const Paragraph = styled.div`
  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  /* text / primary */
  color: #6D5F67;
  margin: ${props => props.paragraphMargin || ''};
  width: ${props => props.paragraphWidth || ''};
`;

const PricesParagraph = styled(Paragraph)`
  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 91px;
  /* identical to box height */
  text-align: center;

  /* gold/50 (main) */
  color: #CBB387;
  margin-top: 36px;
`;

const SmallParagraph = styled(Paragraph)`
  font-family: Merriweather;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  /* text / primary */
  color: #6D5F67;
  text-align: center;
  margin-bottom: ${props => props.marginBottom || ''};
`;

<Paragraph></Paragraph>

export {Paragraph,
        PricesParagraph,
        SmallParagraph,
};