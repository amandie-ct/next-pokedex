'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

html, body, #__next {
    height: 100%;
}

body {
    font-family: 'Quicksand', sans-serif;
}


::-webkit-scrollbar {
    width: 10px;  
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #F2756F;
    border-radius: 6px;
  }
`

export default GlobalStyles
