import React from 'react';
import styled, {css} from 'styled-components';

const Photo = styled.div`
    background-repeat: no-repeat;
    background-image: ${props => props.photo || ''};
    grid-column: ${props => props.column || ''};
    grid-row: ${props => props.row || ''};
    background-size: ${props => props.backgroundSize || 'cover'};
    `;

const PhotoBrands = styled(Photo)`
  background-size: contain;
`;

const PhotoAvatar = styled(Photo)`
 width: 118px;
  height: 118px;
  margin: 40px auto 0;
  border: 1px solid red;
`;

<Photo></Photo>

export {Photo,
        PhotoBrands,
        PhotoAvatar,
};

