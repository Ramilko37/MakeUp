import React from "react";
import images from "../../utils/images";
import {HeroContainer,
        HeroWrapper,
        HeroTitle,
        HeroP,
        HeroImg,
        HeroImgMbl
} from "./HeroStyles";
import {ButtonCallme} from '../Button/Button';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroImg src={images.hero_image} />
            <HeroImgMbl src={images.hero_image}/>
            <HeroWrapper>
                <HeroTitle>
                    Соберу красивый образ для мероприятий и фотосессий
                </HeroTitle>
                <HeroP>
                    Профессиональные макияж и укладка с выездом на дом в Москве и МО
                </HeroP>
                <ButtonCallme>Написать в WhatsApp</ButtonCallme>
            </HeroWrapper>
        </HeroContainer>
    )
};

export default Hero;