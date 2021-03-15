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
    ButtonCallMe
} from "./Components/Button";
import Hero from "./Components/Hero";
import HeroContentContainer from "./Components/HeroContentContainer";
import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle";
import Paragraph from "./Components/Paragraph";
import Portfolio from "./Components/Portfolio";
import Grid from "./Components/Grid";
import Photo from "./Components/Photo";
import About from "./Components/About";
import AboutContentContainer from "./Components/AboutContentContainer";
import AboutContentItem from "./Components/AboutContentItem";
import Portrait from "./Components/Portrait";
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
            <Title titleMargin='0 0 24px'>
                Гарантированно красивый образ для мероприятия или фотосессии
            </Title>
            <Paragraph paragraphMargin='0 0 60px'>
                Профессиональные макияж и укладка с выездом на дом в Москве и МО
            </Paragraph>
            <ButtonCallMe>Написать в WhatsApp</ButtonCallMe>
        </HeroContentContainer>
    </Hero>
          <Portfolio>
              <Title titleMargin='0 0 20px 64px' titleWidth='1312px' textalignMargin='start'>Примеры моих работ</Title>
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
            <Title titleMargin='60px 0 64px 0'>Почему я</Title>
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
          <Container> </>
     </Page>
  );
}

export default App;


