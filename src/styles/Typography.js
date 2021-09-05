import { createGlobalStyle } from 'styled-components';

import RobotoMonoRegular from '../assets/fonts/RobotoMono/RobotoMono-Regular.ttf';
import RobotoMonoBold from '../assets/fonts/RobotoMono/RobotoMono-Bold.ttf';
import RobotoMonoSemiBold from '../assets/fonts/RobotoMono/RobotoMono-SemiBold.ttf';

import SFMonoMonoRegular from '../assets/fonts/SFMono/SFMono-Regular.ttf';
import SFMonoMonoBold from '../assets/fonts/SFMono/SFMono-Medium.ttf';
import SFMonoMonoSemiBold from '../assets/fonts/SFMono/SFMono-SemiBold.ttf';

import ManropeRegular from '../assets/fonts/Manrope/Manrope-Regular.ttf';
import ManropeBold from '../assets/fonts/Manrope/Manrope-Medium.ttf';
import ManropeSemiBold from '../assets/fonts/Manrope/Manrope-SemiBold.ttf';

import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

import CourierPrimeBold from '../assets/fonts/CourierPrime/CourierPrime-Bold.ttf';
import CourierPrimeRegular from '../assets/fonts/CourierPrime/CourierPrime-Regular.ttf';

const Typography = createGlobalStyle`

  /* Courrier Prime */ 
  /* @font-face {
    font-family: 'CourierPrime Regular';
    src: url(${CourierPrimeRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'CourierPrime Bold';
    src: url(${CourierPrimeBold});
    font-style: normal;
  } */

  /* ROBOTO */ 
  /* @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
  font-family: 'RobotoMono Bold';
  src: url(${RobotoMonoBold});
  font-style: normal;
  }
  @font-face {
    font-family: 'RobotoMono SemiBold';
    src: url(${RobotoMonoSemiBold});
    font-style: normal;
  } */

  /* MANROPE */
  @font-face {
    font-family: 'Manrope Regular';
    src: url(${ManropeRegular});
    font-style: normal;
  }
    @font-face {
    font-family: 'Manrope Bold';
    src: url(${ManropeBold});
    font-style: normal;
  }

    @font-face {
    font-family: 'Manrope SemiBold';
    src: url(${ManropeSemiBold});
    font-style: normal;
  }

  /* SFMONO */
  /* @font-face {
    font-family: 'SFMonoMono Regular';
    src: url(${SFMonoMonoRegular});
    font-style: normal;
  }
    @font-face {
    font-family: 'SFMonoMono Bold';
    src: url(${SFMonoMonoBold});
    font-style: normal;
  }

    @font-face {
    font-family: 'SFMonoMono SemiBold';
    src: url(${SFMonoMonoSemiBold});
    font-style: normal;
  } */
  /* Montserrat */ 
  /* @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  } */

  html{
    font-family: 'Manrope SemiBold';
    color: var(--white);
  }
  *{
    font-family: 'Manrope SemiBold';
    color: var(--white);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Manrope Bold'
  }

`;

export default Typography;
