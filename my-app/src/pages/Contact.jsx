import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import ct from "../image/icon/ct.png";
import email from "../image/icon/email.png"
import phon from "../image/icon/phon.png"

function Contact() {
  return (
    <>
      <Container className="mt-4">
        <h2>
          <img
            src={ct}
            alt="React Icon"
            width="50"
            height="50"
            className="me-2"
          />
          Contact Us
        </h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>
          <Button style={{ backgroundColor: "#996633" }} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <hr />
        <p>
        <img
            src={email}
            alt="React Icon"
            width="40"
            height="40"
            className="me-2"
          />: contact@booksloop.com</p>
          <p>
          <img
            src={phon}
            alt="React Icon"
            width="40"
            height="40"
            className="me-2"
          />
        : 012 345 6789</p>
      </Container>
    </>
  );
}

export default Contact;
