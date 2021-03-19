import React from 'react';
import styled, {css} from 'styled-components'

const Section = styled.div`
    display: flex;
    width: 1440px;
    border: 1px solid red;
    background: ${props => props.background || ''};
    flex-direction: ${props => props.flexDirection || ''};
    padding: ${props => props.padding || ''};
    width: ${props => props.width || ''};
    margin: ${props => props.margin || ''};
    `;

<Section></Section>

export default Section;