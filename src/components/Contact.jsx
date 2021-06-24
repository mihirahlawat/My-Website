import React from 'react';
// import { useState } from 'react';
// import { Alert } from 'react-bootstrap';
import ContactSection from './common/ContactSection';
import LocationMap from './common/LocationMap';

export default function Contact() {
  // const [showMessage, setShowMessage] = useState(0);

  // let message;
  // if (showMessage === 1)
  //   message = (
  //     <Alert variant="success" onClose={() => setShowMessage(0)} dismissible>
  //       <Alert.Heading>Message sent successfully!</Alert.Heading>
  //       <p>I will contact you shortly :))</p>
  //     </Alert>
  //   );
  // if (showMessage === 2)
  //   message = (
  //     <Alert variant="danger" onClose={() => setShowMessage(0)} dismissible>
  //       <Alert.Heading>Oh snap! There was some error.</Alert.Heading>
  //       <p>Please check whether you email address is valid.</p>
  //     </Alert>
  //   );

  return (
    <>
      <ContactSection />
      <LocationMap />
    </>
  );
}
