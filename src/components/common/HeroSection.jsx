import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../assets/images/hero2.jpg';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero-name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero-img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero-info {
    margin-top: -18rem;
  }
  .hero-social,
  .hero-scrolldown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero-social {
    left: 50px;
  }
  .hero-scrolldown {
    right: 50px;
  }
  .hero-social-indicator,
  .hero-scrolldown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero-scrolldown {
    img {
      max-height: 70px;
    }
  }
  .hero-social-text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero-heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero-name {
        font-size: 4.5rem;
      }
    }
    .hero-img {
      height: 300px;
    }
    .hero-info {
      margin-top: 3rem;
    }
    .hero-social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero-social-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero-social-text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero-scrolldown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero-heading">
            <span>Hello, this is </span>
            <span className="hero-name">Mihir Ahlawat</span>
          </h1>
          <div className="hero-img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero-info">
            <PText>
              I am a software developer. I love to code and enjoy problem
              solving.
            </PText>
            <Button btnLink="/projects" btnText="See my work" outline={false} />
          </div>
          <div className="hero-social">
            <div className="hero-social-indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="Social Media Arrow" />
            </div>
            <div className="hero-social-text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mihirahlawat/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ahlawat.mihir/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mihirahlawat/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mihirahlawat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero-scrolldown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
