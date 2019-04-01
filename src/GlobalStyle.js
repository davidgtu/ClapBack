import { createGlobalStyle } from 'styled-components';
import { millenialPink, offBlack } from './components/styles';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  @font-face {
    font-family: "Cooper Black";
    src: local('Cooper Black'), url('fonts/Cooper Black Regular.ttf') format("ttf"),
         local('Cooper Black'), url('fonts/cooper_black_regular-webfont.woff') format("woff"),
         local('Cooper Black'), url('fonts/cooper_black_regular-webfont.woff2') format("woff2");
  }

  body {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    background-color: ${millenialPink};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: "Cooper Black";
    color: ${offBlack};
  }

  p, textarea, li, ol, span {
    font-family: 'Lato', sans-serif;
  }

  textarea {
    resize: none;
  }
`;