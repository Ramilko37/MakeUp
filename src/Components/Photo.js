import React from 'react';
import styled, {css} from 'styled-components';
import images from "../utils/images";
import * as url from "url";

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
  margin: 0 0 162px 14px;
`;

const WhyMePhoto = styled(Photo)`
  display: inline;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${images.about_photo});
  width: 580px;
  height: 730px;
`;

const FooterPhoto = styled(Photo)`
    position: absolute;
    width: 596px;
    height: 824px;
    background-image: url(${images.footer_photo});
  
`;

<Photo></Photo>

export {Photo,
        PhotoBrands,
        PhotoAvatar,
        PhotoCosmetics,
        FooterPhoto,
        WhyMePhoto,
};

