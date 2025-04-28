import React from 'react';
import "../css/Contact.css"

export default function ContactConfirmation() {
  return (
    <div className="contact-bg confirmation-bg">
      <h1>Thank you!</h1>
      <p className="confirmation-message">Your message has been successfully sent.</p>
      <p>Madison will get back to you soon!</p>
      <a href="/contact">Go back to Contact Page</a> {/* Or wherever you want */}
    </div>
  );
}