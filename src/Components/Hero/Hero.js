import React from "react";
import images from "../../utils/images";
import {HeroContainer,
        HeroWrapper,
        HeroTitle,
        HeroP
} from "./HeroStyles";
import {ButtonCallme} from '../Button/Button';

const Hero = () => {
    return (
        <HeroContainer>
            <img src={images.hero_image} alt=""/>
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