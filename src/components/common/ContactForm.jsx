import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs, { init } from 'emailjs-com';

init('user_23jXZswGdnIjuH9DjRYNi');

const Form = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [messageField, setMessageField] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_phod9ys', 'template_j7h8ygg', e.target).then(
      (result) => {
        // props.setFunction(1);
        alert("Message sent! I'll reply to you soon :))");
      },
      (error) => {
        // props.setFunction(2);
        alert(
          'There was an error! Please check whether your email id was correct.'
        );
      }
    );
    setNameField('');
    setEmailField('');
    setMessageField('');
  }

  return (
    <>
      <Form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={nameField}
              onChange={(e) => setNameField(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={emailField}
              onChange={(e) => setEmailField(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={messageField}
              onChange={(e) => setMessageField(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </Form>
    </>
  );
}
