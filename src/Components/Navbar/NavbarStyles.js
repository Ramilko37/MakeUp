
import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 64px;
  background-color: rgba(247, 241, 244, 0.8);
  box-sizing: border-box;
  
  @media screen and (max-width: 375px){
  width: 375px;
  padding: 0;
    border: 1px solid red;
}
`;

