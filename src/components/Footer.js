import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

import instagram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import email from '../assets/images/email.svg';

const FooterStyle = styled.div`
  /* background-color: var(--deep-dark);
  padding-top: 10rem; */
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--indigo-blue);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 0;
    margin-bottom: 1rem;
    .container {
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      a {
        transition: 0.5s ease opacity;
        :hover {
          opacity: 20%;
        }
      }
    }
    .para {
      margin-left: 0;
    }
  }
  .social-icons {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .copyright {
      margin-top: 10rem;
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        margin-top: 1rem;
      }
    }
    .social-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      span {
        padding: 0 1rem 0 1rem;
      }
      img {
        max-height: 22px;
        :visited {
          opacity: 20%;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      {/* <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Ayan Khan</h1>
          <PText>
            A freelance web designer and developer from Chittagong, Bangladesh.
            I always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+88012312',
                path: 'tel:+88012312',
              },
              {
                title: 'webcifar@gmail.com',
                path: 'mailto:webcifar@gmail.com',
              },
              {
                title: 'GEC Circle, Chittagong, Bangladesh',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div> */}
      <div className="copyright">
        <div className="social-icons">
          {/* <span>
            <a
              href="http://facebook.com/webcifar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="icon" />
            </a>
          </span> */}
          <span>
            <a
              href="http://github.com/parides"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="icon" />
            </a>
          </span>
          <span>
            <a
              href="http://linkedin.com/in/parides"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="icon" />
            </a>
          </span>
          <span>
            <a
              href="mailto:andreasparides@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={email} alt="icon" />
            </a>
          </span>
        </div>
        <div className="container">
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/parides/portfolio"
            >
              Designed and Developed by <br />
              Andreas Paridis
            </a>
          </p>
        </div>
      </div>
    </FooterStyle>
  );
}
