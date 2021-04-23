import styled from 'styled-components';

export const HeroContainer = styled.div`
display: flex;
  padding: 0 64px;
  margin: 0 auto 64px;
  justify-content: space-between;
  background-color: rgba(247,241,244,.8);
  /* max-width: 1280px; */
  @media screen and (max-width: 375px){
    width: 375px;
    flex-direction: column;
    padding: 0;
    border: 1px solid red;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  max-width: 680px;
  flex-direction: column;
  padding-top: 132px;
  margin-left: 2.77vw;
  @media screen and (max-width: 375px){
  padding: 0;
  }
`;

export const HeroTitle = styled.h2`
  width: fit-content;
  color: black;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 126.6%;
  margin: 0 0 16px;
  letter-spacing: 0.01em;
  @media screen and (max-width: 375px){
    margin: 0 16px 24px;
    font-size: 30px;
    line-height: 135%;
    /* or 41px */
    text-align: center;
  }
`;

export const HeroP = styled.p`
  margin: 0 0 60px;
  @media screen and (max-width: 375px){
    font-family: Merriweather;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */
    text-align: center;

    /* text / primary */
    color: #6D5F67;
    margin: 0 16px 128px;
  }
`;

export const HeroImg = styled.img`
width: 36.94vw;
min-width: 350px;
object-fit: cover;
  @media screen and (max-width: 375px){
    //margin: 64px 90px 24px 107px;
    //width: 178px;
    //height: 178px;
    //border-radius: 135px;
    //border: 1px solid red;
    display: none;
  }
  `;

  export const HeroImgMbl = styled.img` 
    display: none;
    @media screen and (max-width: 375px){
      display: flex;
      margin: 64px 90px 24px 107px;
      width: 178px;
      height: 178px;
      border: 1px solid red;
      border-radius: 50%;
      /* не забываем о кроссбраузерности */
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      -khtml-border-radius: 50%;
    }

`;