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
import HeroImage from "./Components/HeroImage";
import HeroContentContainer from "./Components/HeroContentContainer";
import HeroTitle from "./Components/HeroTitle";
import HeroParagraph from "./Components/HeroParagraph";

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
        <HeroImage></HeroImage>
        <HeroContentContainer>
            <HeroTitle> Гарантированно красивый образ
                для мероприятия или фотосессии
            </HeroTitle>
            <HeroParagraph>
                Профессиональные макияж и укладка с выездом на дом в Москве и МО
            </HeroParagraph>
            <ButtonCallMe>Написать в WhatsApp</ButtonCallMe>
        </HeroContentContainer>
    </Hero>
     </Page>
  );
}

export default App;


