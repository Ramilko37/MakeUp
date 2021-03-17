import React from 'react';
import styled, {css} from 'styled-components';
import images from "../utils/images";

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

const PhotoCosmetics = styled(Photo)`
  display: flex;
  width: 620px;
  height: 372px;
  background-image: url(${images.cosmetics});
  margin-left: 14px;
`;

<Photo></Photo>

export {Photo,
        PhotoBrands,
        PhotoAvatar,
        PhotoCosmetics

};

