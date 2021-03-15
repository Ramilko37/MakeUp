import React from 'react';
import styled, {css} from 'styled-components'

const Grid = styled.div`
    display: grid;
    width: calc(100% - (64px * 2));
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 126px);
    grid-gap: 16px;
    margin: 0 auto;
    `;

const GridBrands = styled(Grid)`
    
`;

<Grid></Grid>

export default Grid;
