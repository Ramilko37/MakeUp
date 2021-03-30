import React from 'react';
import styled, {css} from 'styled-components'
import { render, screen } from '@testing-library/react';

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 0 64px;
    background-color: rgba(247,241,244,.8);
  box-sizing: border-box;
`;

