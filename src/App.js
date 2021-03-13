import Page from './Page';
import Header from "./Header";
import Logo from './Logo';
import {
    Button,
    ButtonTelegram
} from "./Button";
import React from "react";

function App() {
  return (
      <Page>
       <Header>
    <Logo>
        Людмила Бабакина
    </Logo>
           <div>
               <Button><img width={22} height={22} src="./Vector.png" alt=""/></Button>
               <ButtonTelegram></ButtonTelegram>
               <Button></Button>
               <Button></Button>
               <Button></Button>
           </div>

       </Header>
     </Page>
  );
}

export default App;


