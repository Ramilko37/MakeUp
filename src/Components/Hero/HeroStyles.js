import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
`;

export const HeroWrapper = styled.div`
  display: flex;
  max-width: 680px;
  margin: 30px 0 24px 40px;
  flex-direction: column;
  justifyContent: center;
  width: fit-content;
`;

export const HeroTitle = styled.h2`
  width: fit-content;
  color: black;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 126.6%;
  /* or 51px */
  letter-spacing: 0.01em;
`;

export const HeroP = styled.p`
  margin: 0 0 60px;
`;