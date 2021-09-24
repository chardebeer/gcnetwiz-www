import React from 'react'
import Header from "./components/organisms/header/header"
import {GlobalStyle} from "./style";
import Hero from "./components/organisms/hero/hero";
import PrefooterBanner from "./components/organisms/prefooter-banner/prefooter-banner";
import ContentFullPage from "./components/layout/ContentFullPage";
import CtaBanner from "./components/organisms/cta-banner/cta-banner";
import Footer from "./components/organisms/footer/footer";
import WaveDc from "./components/molecules/decorative-wave/decorative-break"
import CardList from "./components/templates/ServiceCardList";
import  {ContactUs} from "./components/templates/ContactForm";

function App() {
  return (
  
      <ContentFullPage>
        <GlobalStyle/>
        <Header/>
        <Hero/>
          <WaveDc/>
          <CtaBanner/>
          <CardList/>
          <PrefooterBanner/>
          <ContactUs/>
          <Footer/>
      </ContentFullPage>
  )
}

export default App
