import React from 'react';
import styled, {css} from 'styled-components'
import { render, screen } from '@testing-library/react';
import images from "../utils/images";

const HeroImage = styled.div`
    width: 532px;
    height: 664px;
    background-image: url("${images.hero_image}");
    margin-left: 44px;
    background-color: transparent;
  `;

<HeroImage></HeroImage>

export default HeroImage;
