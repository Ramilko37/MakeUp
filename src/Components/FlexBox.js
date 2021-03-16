import React from 'react';
import styled, {css} from 'styled-components';
import images from "../utils/images";

const FlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || '' };;
    width: ${props => props.width || '' };
    height: ${props => props.height || '' };
    margin: ${props => props.margin || '' };
    padding: ${props => props.padding || '' };
    background: ${props => props.background || ''};
    justify-content: ${props => props.justifyContent || ''};
    z-index: 100;
    position: relative;
}
`;



<FlexBox></FlexBox>

export default FlexBox;