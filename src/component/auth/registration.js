import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink}  from 'react-router-dom';

export default function Login() {
    return (
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">Golden Age</h2>
                    <p className=" mb-5">Please Registration!</p>
                    <div className="mb-3">
                      <Form>
                      <Form.Group className="mb-3" controlId="formBasicFirstname">
                          <Form.Label className="text-center">
                            FirstName
                          </Form.Label>
                          <Form.Control type="firstname" placeholder="Enter phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                          <Form.Label className="text-center">
                            Phone
                          </Form.Label>
                          <Form.Control type="phone" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Sign Up
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account?{" "}
                          <a href='/login' className="text-primary fw-bold">
                            Sign In
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};
