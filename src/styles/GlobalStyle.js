import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
/* 
    --oxford-blue: #0A1128;
    --royal-blue-dark: #001F54;
    --indigo-dye: #034078;
    --cg-blue: #1282A2; */

    --oxford-blue: #023047;
    --royal-blue-dark: #126782;
    --indigo-dye: #126782;
    --cg-blue: #219EBC;

    --aquamarine: #5DFDCB;
    --testcolor: 'rgba(52, 52, 52, 0.8)';
    
    --jet: #293132;
    --steel-blue: #3a86ff;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : #F3F8F2;
    --black: black;
    
  }
  html{
    font-size: 10px;
    font-family: 'Manrope Regular';
    /* background: linear-gradient(180deg, var(--jet), var(--steel-blue)); */
    background: var(--jet);
    /* background: rgb(41,49,50);
    background: linear-gradient(180deg, rgba(41,49,50,1) 0%, rgba(44,63,83,1) 38%, rgba(46,74,111,1) 73%, rgba(47,81,127,1) 100%); */
    /* background: rgb(41,49,50); */
    /* background: linear-gradient(180deg, rgba(41,49,50,1) 0%, rgba(44,63,83,1) 50%, rgba(46,74,111,1) 100%, rgba(47,81,127,1) 100%); */
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

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(41,49,50,1) 0%, rgba(44,63,83,1) 50%, rgba(46,74,111,1) 100%, rgba(47,81,127,1) 100%); */
    display:none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--indigo-dye);
    border-radius: 10px;
  }

  @keyframes zoom-in-out {
      0% {
        

      }
      50% {
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.19), 0 6px 6px rgba(255, 255, 255, 0.23);
      }
      100% {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);      }
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
