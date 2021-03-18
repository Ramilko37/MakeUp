import React from "react";
import Page from './Components/Page';
import Header from "./Components/Header";
import Logo from './Components/Logo';
import ButtonContainer from './Components/ButtonContainer';
import {
    ButtonTelegram,
    ButtonInstagram,
    ButtonWhatsapp,
    ButtonPhone,
    ButtonCallMe,
    ButtonContact,
} from "./Components/Button";
import Hero from "./Components/Hero";
import HeroContentContainer from "./Components/HeroContentContainer";
import Title from "./Components/Title";
import {Subtitle} from "./Components/Subtitle";
import {CoursiveParagraph,
        Paragraph,
        ContactsParagraph,
        PricesParagraph,
        SmallParagraph,
        FooterParagraph} from "./Components/Paragraph";
import Portfolio from "./Components/Portfolio";
import {Grid, GridBrands} from "./Components/Grid";
import {Photo, PhotoBrands, PhotoAvatar, PhotoCosmetics} from "./Components/Photo";
import About from "./Components/About";
import AboutContentContainer from "./Components/AboutContentContainer";
import AboutContentItem from "./Components/AboutContentItem";
import Portrait from "./Components/Portrait";
import Container from "./Components/Container";
import FlexBox from "./Components/FlexBox";
import {PricesSubtitle} from "./Components/Subtitle";
import Listed from "./Components/List";
import Footer from "./Components/Footer";

import images from "./utils/images";

function App() {
  return (
      <Page>
       <Header>
    <Logo>
        Людмила Бабакина
    </Logo>
           <ButtonContainer>
               <ButtonTelegram></ButtonTelegram>
               <ButtonInstagram></ButtonInstagram>
               <ButtonWhatsapp></ButtonWhatsapp>
               <ButtonPhone>+7(926)422 86 80</ButtonPhone>
               <ButtonCallMe>Написать в WhatsApp</ButtonCallMe>
           </ButtonContainer>
       </Header>
    <Hero>
        <img src={images.hero_image} alt=""/>
        <HeroContentContainer>
            <Title margin='0 0 24px'>
                Гарантированно красивый образ для мероприятия или фотосессии
            </Title>
            <Paragraph paragraphMargin='0 0 60px'>
                Профессиональные макияж и укладка с выездом на дом в Москве и МО
            </Paragraph>
            <ButtonCallMe>Написать в WhatsApp</ButtonCallMe>
        </HeroContentContainer>
    </Hero>
          <Portfolio>
              <Title margin='0 0 20px 64px' width='1312px' textalignMargin='start'>Примеры моих работ</Title>
              <Grid>
                  <Photo photo={`url(${images.photo_05})`} column='1/6' row='1/4'></Photo>
                  <Photo photo={`url(${images.photo_02})`} column='6/9' row='1/4'></Photo>
                  <Photo photo={`url(${images.photo_03})`} column='9/-1' row='1/3'></Photo>
                  <Photo photo={`url(${images.photo_04})`} column='1/4' row='4/6'></Photo>
                  <Photo photo={`url(${images.photo_01})`} column='4/7' row='4/6'></Photo>
                  <Photo photo={`url(${images.photo_04})`} column='7/9' row='4/6'></Photo>
                  <Photo photo={`url(${images.photo_07})`} column='9/13' row='3/6'></Photo>
              </Grid>
          </Portfolio>
    <About>
        <AboutContentContainer>
            <Title margin='60px 0 64px 0'>Почему я</Title>
            <AboutContentItem itemMargin='16px'>
                <Subtitle>Индивидуальный подход</Subtitle>
                <Paragraph paragraphWidth='317px'>Прическа и макияж будут красивыми, стойкими
                    и современными, а также комфортными именно для вас</Paragraph>
            </AboutContentItem>
            <AboutContentItem>
                <Subtitle>Профессиональная косметика</Subtitle>
                <Paragraph paragraphWidth='317px'>Профессиональные косметика и стайлинги позволяют создать
                    стойкий образ без вреда для вашей кожи и волос</Paragraph>
            </AboutContentItem >
            <AboutContentItem itemMargin='16px'>
                <Subtitle>По договору</Subtitle>
                <Paragraph paragraphWidth='317px'>Заключение договора на оказание услуг (по желанию)</Paragraph>
            </AboutContentItem>
            <AboutContentItem>
                <Subtitle>Ранний выезд</Subtitle>
                <Paragraph paragraphWidth='317px'>Приеду к вам на дом, в офис или на торжество 24/7, если дата не занята.</Paragraph>
            </AboutContentItem>
            <AboutContentItem itemMargin='16px'>
                <Subtitle>Гигиена</Subtitle>
                <Paragraph paragraphWidth='317px'>Тщательная гигиена и дезинфекция рабочих инструментов.</Paragraph>
            </AboutContentItem>
            <AboutContentItem>
                <Subtitle>Опыт</Subtitle>
                <Paragraph paragraphWidth='317px'>Дипломированный визажист. В профессии с 2012 года.</Paragraph>
            </AboutContentItem>
        </AboutContentContainer>
        <Portrait portrait={`url(${images.about_photo})`}></Portrait>
    </About>
          <Container background='rgba(247,241,244,.8)' flexDirection='column'>//поискать решение сделать норм ширину
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
          </Container>
          <Container flexDirection='column' padding='120px 64px'>
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
          </Container>
          <Container flexDirection='column' background='#F7F1F4'>
              <Title margin='56px 0 0 64px'>Отзывы моих клиентов</Title>
              <FlexBox margin='174px auto' justify-content='center' flexDirection='column' width='648px' background='#FFFFFF'>

                    <PhotoAvatar photo={`url(${images.photo_avatar})`}></PhotoAvatar>
                    <Subtitle margin='24px auto 16px'>@avadakedavra</Subtitle>
                    <CoursiveParagraph>Так неожиданно и приятно все было сделано, мне очень понравилось,
                        всем рекомендую буду пользоваться еще раз.</CoursiveParagraph>
              </FlexBox>
          </Container>
          <Container flexDirection='column'>
              <Title margin='120px 0 22px 64px'>Нормы гигиены по СанПиН</Title>
              <FlexBox>
                  <PhotoCosmetics></PhotoCosmetics>
                  <Listed />
                  {/*<List>*/}
                  {/*    <ListItem>Во-первых, всегда использую несколько комплектов кистей,*/}
                  {/*    в случае необходимости их замены.</ListItem>*/}
                  {/*    <ListItem>Во-вторых, для стерилизации кистей и других инструментов использую лучший дезинфектор*/}
                  {/*        - Esti*/}
                  {/*        (в составе на первом месте спирт)</ListItem>*/}
                  {/*    <ListItem>В-третьих, ехать к клиенту с грязными кистями,*/}
                  {/*        в первую очередь не профессионально и испортит мне репутацию,*/}
                  {/*        а я ценю каждого своего клиента.</ListItem>*/}
                  {/*</List>*/}
              </FlexBox>
          </Container>
          <Container>
              <FlexBox flexDirection='column' margin='142px 0 198px 175px' width='fit-content'>
                  <Title margin='0 0 16px 0'>Людмила Бабакина</Title>
                  <ContactsParagraph>Свяжитесь со мной, чтобы проконсультироваться о вашем образе и забронировать дату встречи</ContactsParagraph>
                  <ContactsParagraph>e-mail: makeup@ludmilababakina.ru</ContactsParagraph>
                  <ContactsParagraph>Телефон в Москве: +7(926)422 86 80</ContactsParagraph>
                  <ButtonContact>Связаться</ButtonContact>
              </FlexBox>
          </Container>
          <Footer >
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
          </Footer>
     </Page>
  );
}

export default App;


