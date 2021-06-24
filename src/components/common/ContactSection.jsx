import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';

import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection-wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection-wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection-wrapper {
      flex-direction: column;
    }
    .contactSection-wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  // const { setFunction } = props;

  return (
    <>
      <ContactSectionStyle>
        <div className="container">
          <SectionTitle heading="contact" subheading="get in touch" />
          <div className="contactSection-wrapper">
            <div className="left">
              <ContactInfoItem icon={<MdLocalPhone />} text="+91 9650454505" />
              <ContactInfoItem icon={<MdEmail />} text="mihiraman@gmail.com" />
              <ContactInfoItem text="Delhi, INDIA" />
            </div>
            <div className="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </ContactSectionStyle>
    </>
  );
}
