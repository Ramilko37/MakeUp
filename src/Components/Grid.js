import React from 'react';
import styled, {css} from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 5vw);
    grid-gap: 16px;
    `;

<Grid></Grid>

export default Grid;