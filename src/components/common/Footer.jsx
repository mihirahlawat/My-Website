import React from 'react';
import styled from 'styled-components';
import FooterColumn from './FooterColumn';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer-col1 {
    flex: 2;
  }
  .footer-col2,
  .footer-col3,
  .footer-col4 {
    flex: 1;
  }
  .footer-col1-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    p {
      margin-left: 0;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer-col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer-col1">
          <h1 className="footer-col1-title">Mihir Ahlawat</h1>
          <PText>
            A software developer from Delhi, India. I love programming and
            building logic behind it. Connect with me and lets build something
            new together.
            <br />
            <br />
            Or maybe lets connect virtually for a coffee and talk about why The
            Office is the best show ever!
          </PText>
        </div>
        <div className="footer-col2">
          <FooterColumn
            heading="Navigate"
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
        <div className="footer-col3">
          <FooterColumn
            heading="Contact Info"
            links={[
              {
                title: '+91 9650454505',
                path: 'tel:+919650454505',
              },
              {
                title: 'mihiraman@gmail.com',
                path: 'mailto:mihiraman@gmail.com',
              },
              {
                title: 'Delhi, INDIA',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer-col4">
          <FooterColumn
            heading="My Web Presence"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/mihirahlawat/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/mihirahlawat',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/ahlawat.mihir/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/mihirahlawat/',
              },
              {
                title: 'LeetCode',
                path: 'https://leetcode.com/mihiraman/',
              },
              {
                title: 'Steam',
                path: 'https://steamcommunity.com/id/mihiraman',
              },
              {
                title: 'Chess.com',
                path: 'https://www.chess.com/member/mihirahlawat',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            Made with ❤ by Mihir Ahlawat <br /> Inspired By{' '}
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              web cifar
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
