import React from 'react';
import styled, {css} from 'styled-components';
import images from "../utils/images";

const Photo = styled.div`
    
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${props => props.photo || ''};
    grid-column: ${props => props.column || ''};
    grid-row: ${props => props.row || ''};
    `;

<Photo></Photo>

export default Photo;

