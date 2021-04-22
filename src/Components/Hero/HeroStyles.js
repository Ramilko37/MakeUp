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
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  max-width: 680px;
  flex-direction: column;
  padding-top: 132px;
  margin-left: 2.77vw;
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
`;

export const HeroP = styled.p`
  margin: 0 0 60px;
`;

export const HeroImg = styled.img`
width: 36.94vw;
min-width: 350px;
object-fit: cover;

`;