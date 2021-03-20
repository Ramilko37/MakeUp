import React from "react";
import { Page } from './Components/Page';
import Navbar from './Components/Navbar/Navbar';
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";


function App() {
    // const [isButtonClicked, setIsButtonClicked] = React.useState(false);
    // const click = () => setIsButtonClicked(!isButtonClicked);
  return (

          <Page>
              <Navbar />
              <Content />
              <Footer />
          </Page>

  );
}
export default App;


