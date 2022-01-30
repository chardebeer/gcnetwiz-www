import React from 'react'

import {GlobalStyle} from "./style";

import ContentFullPage from "./components/layout/ContentFullPage";
import ComingSoon from './components/comingsoon';

function App() {
  return (
  
      <ContentFullPage>
        <GlobalStyle/>
        <ComingSoon/>
      </ContentFullPage>
  )
}

export default App
