import React from 'react';
import styled, {css} from 'styled-components';

function Listed() {
    const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 632px;
  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;

  /* text / primary */
  color: #6D5F67;
  margin: 0 58px 161px 94px;
`;

    const ListItem = styled.li`
      
`;

    return (<List>
        <ListItem>Во-первых, всегда использую несколько комплектов кистей,
            в случае необходимости их замены.</ListItem>
        <ListItem>Во-вторых, для стерилизации кистей и других инструментов использую лучший дезинфектор
            - Esti
            (в составе на первом месте спирт)</ListItem>
        <ListItem>В-третьих, ехать к клиенту с грязными кистями,
            в первую очередь не профессионально и испортит мне репутацию,
            а я ценю каждого своего клиента.</ListItem>
    </List>)
}

export default Listed;