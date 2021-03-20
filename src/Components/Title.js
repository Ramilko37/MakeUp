import React from 'react';
import styled, {css} from 'styled-components'

const StyledTitle = styled.h3`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 126.6%;
  /* or 51px */
  letter-spacing: 0.01em;
  /* text/headings */
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  text-align: ${props => props.textalignMargin };
`;

const Title = (props) => {
    return <StyledTitle id='title' {...props}/>
}


export default Title;