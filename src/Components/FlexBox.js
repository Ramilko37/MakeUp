import React from 'react';
import styled, {css} from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || '' };;
    width: ${props => props.width || '' };
    height: ${props => props.height || '' };
    margin: ${props => props.margin || '' };
    padding: ${props => props.padding || '' };
    flex-wrap: ${props => props.wrap || '' };;
    background: ${props => props.background || ''};
    justify-content: ${props => props.justifyContent || ''};
    z-index: 100;
    position: relative;
    border: 1px solid red;
}
`;

const HeaderFlexbox = styled(FlexBox)`
  height: fit-content;
  align-content: center;
`;

const AboutFlexBox = styled(FlexBox)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 350px;
  margin: ${props => props.margin ? "" : "0 16px 64px 0"};
`;

<FlexBox></FlexBox>

export {FlexBox, HeaderFlexbox, AboutFlexBox};