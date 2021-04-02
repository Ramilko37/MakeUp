import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 64px 0;
`;
export const GalleryGrid = styled.div`
  display: grid;
  width: calc(100% - (64px * 2));
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 10vh);
  grid-gap: 16px;
  margin: 0 auto;
`;

export const GalleryTitle = styled.h2`
  width: fit-content;
  color: black;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 126.6%;
  /* or 51px */
  letter-spacing: 0.01em;
  margin: 0 0 20px 64px;
  text-align: start;
`;