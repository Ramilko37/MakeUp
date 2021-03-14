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
import Paragraph from "./Components/Paragraph";
import Portfolio from "./Components/Portfolio";
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
          </Portfolio>
     </Page>
  );
}

export default App;


