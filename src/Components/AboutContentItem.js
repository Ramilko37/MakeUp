import React from 'react';
import styled, {css} from 'styled-components'

const AboutContentItem = styled.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    width: 430px;
    margin-bottom: 64px;
    margin-right: ${props => props.itemMargin || ''};
`;

<AboutContentItem></AboutContentItem>

export default AboutContentItem;