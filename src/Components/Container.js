import React from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 1440px;
    height: 600px;
    background: ${props => props.background || ''};
    flex-direction: ${props => props.flexDirection || ''};
    padding: ${props => props.padding || ''};
    `;

<Container></Container>

export default Container;