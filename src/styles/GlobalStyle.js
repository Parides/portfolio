import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;

    --oxford-blue: #0A1128;
    --royal-blue-dark: #001F54;
    --indigo-dye: #034078;
    --cg-blue: #1282A2;

    --aquamarine: #5DFDCB;
    --testcolor: 'rgba(52, 52, 52, 0.8)';
    
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'SFMonoMono Regular';
    background-color: var(--oxford-blue);
    scroll-behavior: smooth;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 60%;
    margin: 0 auto;
  }
    /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  } */

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--indigo-dye);
    border-radius: 10px;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      max-width: 1200px;
      width: 90%;
      margin: 0 auto;
    }
  }
`;
export default GlobalStyles;
