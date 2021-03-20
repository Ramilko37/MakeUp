import React from "react";
import {FlexBox} from "../FlexBox";
import {FooterParagraph} from "../Paragraph";
import {ButtonInstagram, ButtonTelegram, ButtonWhatsapp} from "../Button/Button";
import {FooterContainer} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterContainer>
        <FlexBox flexDirection='column'>
        <FooterParagraph>Людмила Бабакина.  2021</FooterParagraph>
        <FooterParagraph>Профессиональный визажист с выездом на дом в Москве и Московской Области</FooterParagraph>
    <FlexBox flexDirection='row'>
        <FooterParagraph>Написать мне </FooterParagraph>
        <ButtonTelegram margin='0 9px'></ButtonTelegram>
        <ButtonInstagram margin='0 9px'></ButtonInstagram>
        <ButtonWhatsapp margin='0 9px'></ButtonWhatsapp>
    </FlexBox>
</FlexBox>
</FooterContainer>
    )
}

export default Footer;