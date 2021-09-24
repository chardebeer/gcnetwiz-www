import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


  * {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    :hover {
      color: #c5c5c5;
    }
  }




  img {
    max-width: 100%;
  }


  .content {
    padding: 1rem;
  }`
