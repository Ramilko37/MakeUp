import styled from 'styled-components';

export const BrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 64px 0 64px;
  max-width: 1320px;
`;

export const BrandsTitle = styled.h2`
  width: fit-content;
  color: black;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 126.6%;
  margin: 0 0 48px 0;
  max-width: 962px;
  letter-spacing: 0.01em;
`;

export const BrandsP = styled.p`
  max-width: 656px;
  margin: 0 0 112px 0;
`;

export const BrandsGrid = styled.div`
  display: grid;
  width: calc(100% - (64px * 2));
  grid-gap: 16px;
  margin: 0 auto;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 96px);
`;