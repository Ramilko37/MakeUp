import styled from 'styled-components';
import React from "react";

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(247,241,244,.8);
`;

export const PricesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const PricesContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 472px;
  max-height: 430px;
  margin: 0 16px 173px 0;
  padding: 56px 0 68px 0;
  background: #FFFFFF;
  
  @media screen and (max-width: 960px) {
    min-width: 272px;
  }
`;

export const PricesTitle = styled.h2`
  width: fit-content;
  color: black;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 126.6%;
  /* or 51px */
  letter-spacing: 0.01em;
  margin: 56px 0 48px 64px;
`;

export const PricesSubtitle = styled.h5`
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  /* text/headings */
  color: #4C4248;
  margin: 0 auto;
`;

export const PricesP = styled.p`
  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 91px;
  /* identical to box height */
  text-align: center;
  /* gold/50 (main) */
  color: #CBB387;
  margin-top: 36px;
`;

export const PricesSmallP = styled.p`
  font-family: Merriweather;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  /* text / primary */
  color: #6D5F67;
  text-align: center;
  margin-bottom: ${props => props.marginBottom || ''};
`;