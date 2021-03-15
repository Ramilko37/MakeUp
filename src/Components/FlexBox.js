import React from 'react';
import styled, {css} from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || '' };;
    width: ${props => props.width || '' };
    height: ${props => props.height || '' };
    margin: ${props => props.margin || '' };
    padding: ${props => props.padding || '' };
    background: ${props => props.background || ''};
    `;

<FlexBox></FlexBox>

export default FlexBox;