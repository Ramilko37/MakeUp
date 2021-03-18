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

const CoursiveParagraph = styled(Paragraph)`
        font-family: Merriweather;
        font-style: italic;
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        /* or 24px */
        text-align: center;
        width: 375px;
        margin: 0 auto;

        /* text / primary */
        color: #6D5F67;
`;

const ContactsParagraph = styled(CoursiveParagraph)`
        font-style: normal;
        width: fit-content;
        margin: 0 0 16px 0;
`;

const FooterParagraph = styled(ContactsParagraph)`
        margin-bottom: 8px;
        color: #4C4248;
`;
<Paragraph></Paragraph>

export {Paragraph,
        PricesParagraph,
        SmallParagraph,
        CoursiveParagraph,
        ContactsParagraph,
        FooterParagraph,
};