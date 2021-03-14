import React from 'react';
import styled, {css} from 'styled-components'

const Grid = styled.div`
    display: grid;
    width: calc(100% - (64px * 2));
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 16px;
    `;

<Grid></Grid>

export default Grid;
