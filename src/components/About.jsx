import React from 'react';
import styled from 'styled-components';
import PText from './common/PText';
import Button from './common/Button';
import AboutImg from '../assets/images/about-page-img2.jpg';
import AboutInfoItem from './common/AboutInfoItem';
import ContactBanner from './common/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Mihir Ahlawat</span>
              </p>
              <h2 className="about__heading">A software developer</h2>
              <div className="about__info">
                <PText>
                  I am from Delhi, India. Since my childhood I have been
                  fascinated by technology and computers. Can you imagine a
                  middle schooler always reading 'Digit' magazines in the
                  library to see what's new in tech, when his comptemporaries
                  were reading story books and novels?
                  <br />
                  <br />
                  I started coding when I was in high school. Coding is an art
                  for me. I love how we can come up with different algorithms to
                  solve problems. I think this knack for problem solving is
                  something that transfered to my newly found love for chess.
                  <br />
                  <br />
                  My vision is to make the world a more sustainable place for
                  all living beings through collective efforts and teamwork.
                  <br />
                  <br />
                  On a personal note, I believe in minimalism and living a
                  balanced life. In my free time, you would find me either in
                  the gym, or cycling or maybe just gaming but would always find
                  EDM playing through my headphones.
                </PText>
              </div>
              <Button
                btnText="View Resume"
                btnLink="resume.html"
                target="_blank"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Undergrad"
                items={['Delhi Technological University, Delhi']}
              />
              <AboutInfoItem
                title="School"
                items={['Montfort Sr. Sec. School, Delhi']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Programming"
                items={['C', 'C++', 'Python', 'ABAP']}
              />
              <AboutInfoItem
                title="Frontend"
                items={['HTML', 'CSS', 'JavaScript', 'React']}
              />
              <AboutInfoItem title="Backend" items={['SQL', 'MongoDB']} />
              <AboutInfoItem title="Computational" items={['MATLAB', 'R']} />
              <AboutInfoItem
                title="Other"
                items={['MS Office', 'Git', 'SPSS', 'LaTeX']}
              />
              <AboutInfoItem
                title="Spoken Languages"
                items={['English', 'Hindi', 'Spanish(beginner)']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Jul'20 - Present"
                items={['Associate Software Developer', 'SAP Labs, Bangalore']}
              />
              <AboutInfoItem
                title="Jun-Jul'19"
                items={['Data Science Intern', 'Career Launcher, Delhi']}
              />
              <AboutInfoItem
                title="Jun-Jul'18"
                items={[
                  'Data Science Intern',
                  'Dean Student Welfare, Delhi University',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
