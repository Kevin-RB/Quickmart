import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import './loginForm/LoginForm.css';
import LoginImg from './loginForm/LoginImg';
import LoginForm from './loginForm/LoginForm';
//import { Container } from 'react-bootstrap';

function Login() {
  // Se utilizan los componentes del Login y la Imagen del formulario de Login
  return (
  <div>
    <Container fluid>
      <Row className="login-Row">
        <Col>
        <LoginImg></LoginImg>
        </Col>
        <Col>
          <LoginForm></LoginForm>
        </Col>
      </Row>
    </Container>
  </div>
)
}
export default Login;