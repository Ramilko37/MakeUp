import React from "react";
import Section from "../Section";
import images from "../../utils/images";
import {AboutFlexBox, FlexBox} from "../FlexBox";
import Title from "../Title";
import {ContactsParagraph, CoursiveParagraph, Paragraph, PricesParagraph, SmallParagraph} from "../Paragraph";
import {ButtonCallMe, ButtonContact} from "../Button/Button";
import {Grid, GridBrands} from "../Grid";
import {Photo, PhotoAvatar, PhotoBrands, PhotoCosmetics, WhyMePhoto} from "../Photo";
import {PricesSubtitle, Subtitle} from "../Subtitle";
import Listed from "../List";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import WhyMe from "../WhyMe/WhyMe";


const Content = () => {
    return (
        <>
           <Hero/>
           <Gallery/>
           <WhyMe/>

            <Section background='rgba(247,241,244,.8)' flexDirection='column'>//поискать решение сделать норм ширину
                <Title margin='56px 0 48px 64px'>Стоимость</Title>
                <FlexBox flexDirection='row' margin='0 auto'>
                    <FlexBox flexDirection='column' width='427px' height='300px' margin='0 16px 173px 0' padding='56px 0 68px 0' background='#FFFFFF'>
                        <PricesSubtitle margin='0 auto'>Макияж и укладка</PricesSubtitle>
                        <PricesParagraph>5000 ₽</PricesParagraph>
                        <SmallParagraph marginBottom='36px'>До 28 февраля 6̶5̶0̶0̶</SmallParagraph>
                        <SmallParagraph marginBottom='4px'>Макияж и прическа</SmallParagraph>
                        <SmallParagraph marginBottom='4px'>Предварительная консультация</SmallParagraph>
                        <SmallParagraph marginBottom='4px'>Бесплатный выезд в пределах МКАД</SmallParagraph>
                    </FlexBox>
                    <FlexBox flexDirection='column' width='427px' height='300px' padding='56px 0 68px 0'  background='#FFFFFF'>
                        <PricesSubtitle margin='0 auto'>Макияж</PricesSubtitle>
                        <PricesParagraph>5000 ₽</PricesParagraph>
                        <SmallParagraph marginBottom='36px'>До 28 февраля 6̶5̶0̶0̶</SmallParagraph>
                        <SmallParagraph marginBottom='4px'>Макияж и прическа</SmallParagraph>
                        <SmallParagraph marginBottom='4px'>Предварительная консультация</SmallParagraph>
                        <SmallParagraph marginBottom='4px'>Бесплатный выезд в пределах МКАД</SmallParagraph>
                    </FlexBox>
                </FlexBox>
            </Section>
            <Section id='prof_kosmetika' flexDirection='column' padding='120px 64px' width='1320px'>
                <Title margin='0 0 48px 0' width='962px'>Работаю только с профессиональной косметикой</Title>
                <Paragraph paragraphWidth='656px' paragraphMargin='0 0 112px 0'>В работе с клиентами важно использовать профессиональную, гиппоаллеренную косметику.
                    И я выбираю бренды: Clarins, Clinique, Dewal, Estee Lauder, Inglot, Lancome, Loreal, MAC, Make Up For Ever,
                    NYX, PAESE, Shiseido, Too Faced, Urban Decay</Paragraph>
                <GridBrands>
                    <PhotoBrands photo={`url(${images.brand_01})`} column='1/3' row='1/1'></PhotoBrands>
                    <PhotoBrands photo={`url(${images.brand_02})`} column='2/4' row='2/2'></PhotoBrands>
                    <PhotoBrands photo={`url(${images.brand_03})`} column='4/7' row='1/2'></PhotoBrands>
                    <PhotoBrands photo={`url(${images.brand_04})`} column='5/7' row='2/2'></PhotoBrands>
                    <PhotoBrands photo={`url(${images.brand_05})`} column='7/9' row='1/2'></PhotoBrands>
                    <PhotoBrands photo={`url(${images.brand_06})`} column='8/10' row='2/2'></PhotoBrands>
                    <PhotoBrands photo={`url(${images.brand_07})`} column='10/12' row='1/2'></PhotoBrands>
                </GridBrands>
            </Section>
            <Section flexDirection='column' background='#F7F1F4'>
                <Title margin='56px 0 0 64px'>Отзывы моих клиентов</Title>
                <FlexBox margin='174px auto' justify-content='center' flexDirection='column' width='648px' background='#FFFFFF'>

                    <PhotoAvatar photo={`url(${images.photo_avatar})`}></PhotoAvatar>
                    <Subtitle margin='24px auto 16px'>@avadakedavra</Subtitle>
                    <CoursiveParagraph>Так неожиданно и приятно все было сделано, мне очень понравилось,
                        всем рекомендую буду пользоваться еще раз.</CoursiveParagraph>
                </FlexBox>
            </Section>
            <Section flexDirection='column'>
                <Title margin='120px 0 22px 64px'>Нормы гигиены по СанПиН</Title>
                <FlexBox>
                    <PhotoCosmetics></PhotoCosmetics>
                    <Listed />
                </FlexBox>
            </Section>
            <Section>
                <FlexBox flexDirection='column' margin='142px 0 198px 175px' width='fit-content'>
                    <Title margin='0 0 16px 0'>Людмила Бабакина</Title>
                    <ContactsParagraph>Свяжитесь со мной, чтобы проконсультироваться о вашем образе и забронировать дату встречи</ContactsParagraph>
                    <ContactsParagraph>e-mail: makeup@ludmilababakina.ru</ContactsParagraph>
                    <ContactsParagraph>Телефон в Москве: +7(926)422 86 80</ContactsParagraph>
                    <ButtonContact>Связаться</ButtonContact>
                </FlexBox>
            </Section>
        </>
    )
}

export default Content;