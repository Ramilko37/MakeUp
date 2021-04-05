import React from 'react';
import styled, {css} from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || '' };;
    width: ${props => props.width || '' };
    height: ${props => props.height || '' };
    margin: ${({margin}) => margin || '' };
    padding: ${({padding}) => padding || '' };
    flex-wrap: ${props => props.wrap || '' };;
    background: ${({background}) => background};
    justify-content: ${props => props.justifyContent};
    align-content: ${props => props.alignContent};
    z-index: 100;
    position: relative;
`;

const Flexbox = styled(FlexBox)`
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


export {FlexBox, Flexbox, AboutFlexBox};