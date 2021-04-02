import React from 'react';
import {AboutFlexBox, FlexBox} from "../FlexBox";
import Title from "../Title";
import {Subtitle} from "../Subtitle";
import {Paragraph} from "../Paragraph";
import {WhyMePhoto} from "../Photo";
import Section from "../Section";
import { WhyMeContainer,
        WhyMeWrapper,
        WhyMeTitle,
        WhyMeContent,
        WhyMeAbout,
        WhyMeParagraph,
        WhyMeSubtitle} from "./MhyMeStyles";


const WhyMe = () => {
    return (
        <WhyMeContainer>
            <WhyMeWrapper flexDirection='column'>
                <WhyMeTitle margin='0 0 64px 0'>Почему я</WhyMeTitle>
                <WhyMeContent flexDirection='row' wrap='wrap' width='918px'>
                    <WhyMeAbout>
                        <WhyMeSubtitle>Индивидуальный подход</WhyMeSubtitle>
                        <WhyMeParagraph>Прическа и макияж будут красивыми, стойкими
                            и современными, а также комфортными именно для вас</WhyMeParagraph>
                    </WhyMeAbout>
                    <WhyMeAbout>
                        <WhyMeSubtitle>Профессиональная косметика</WhyMeSubtitle>
                        <WhyMeParagraph>Профессиональные косметика и стайлинги позволяют создать
                            стойкий образ без вреда для вашей кожи и волос</WhyMeParagraph>
                    </WhyMeAbout >
                    <WhyMeAbout>
                        <WhyMeSubtitle>По договору</WhyMeSubtitle>
                        <WhyMeParagraph>Заключение договора на оказание услуг (по желанию)</WhyMeParagraph>
                    </WhyMeAbout>
                    <WhyMeAbout>
                        <WhyMeSubtitle>Ранний выезд</WhyMeSubtitle>
                        <WhyMeParagraph>Приеду к вам на дом, в офис или на торжество 24/7, если дата не занята.</WhyMeParagraph>
                    </WhyMeAbout>
                    <WhyMeAbout margin>
                        <WhyMeSubtitle>Гигиена</WhyMeSubtitle>
                        <WhyMeParagraph>Тщательная гигиена и дезинфекция рабочих инструментов.</WhyMeParagraph>
                    </WhyMeAbout>
                    <WhyMeAbout>
                        <WhyMeSubtitle>Опыт</WhyMeSubtitle>
                        <WhyMeParagraph>Дипломированный визажист. В профессии с 2012 года.</WhyMeParagraph>
                    </WhyMeAbout>
                </WhyMeContent>
            </WhyMeWrapper>
            <WhyMePhoto></WhyMePhoto>
        </WhyMeContainer >
    )
}

export default WhyMe;