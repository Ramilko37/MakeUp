import styled from 'styled-components';

export const HeroContainer = styled.div`
display: flex;
  padding: 0 64px;
  margin: 0 auto 64px;
  justify-content: space-between;
  background-color: rgba(247,241,244,.8);
  /* max-width: 1280px; */
`;

export const HeroWrapper = styled.div`
  display: flex;
  max-width: 680px;
  flex-direction: column;
  padding-top: 132px;
  margin-left: 40px;
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