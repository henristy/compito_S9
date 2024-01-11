import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
        <footer className="mt-5 container text-white-50">
            <div className="mb-5">
                <FaFacebook className="fs-1 me-5" />
                <FaInstagram className="fs-1 me-5" />
                <FaTwitter className="fs-1 me-5" />
                <FaYoutube className="fs-1 me-5" />
            </div>
            <Container>
                <Row>
                <Col sm={3}>Audio and Subtitles</Col>
                <Col sm={3}>Audio description</Col>
                <Col sm={3}>Help Center</Col>
                <Col sm={3}>Gift Cards</Col>
                <Col sm={3}>Media Center</Col>
                <Col sm={3}>Investor Relations</Col>
                <Col sm={3}>Jobs</Col>
                <Col sm={3}>Terms of Use</Col>
                <Col sm={3}>Privacy</Col>
                <Col sm={3}>Legal Notices</Col>
                <Col sm={3}>Cookie Preferences</Col>
                <Col sm={3}>Corporate Information</Col>
                <Col sm={3}>Contact Us</Col>
                </Row>
            </Container>
            <Button type="button" variant="outline-secondary" className="my-3">
                Service Code
            </Button>
            <p>&copy; 1997-2019 Netflix, Inc. (i-0d00fcda2fdf9cc0de)</p>
        </footer>
  );
};

export default Footer;
