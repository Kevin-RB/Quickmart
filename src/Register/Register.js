import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import '../Login/loginForm/LoginForm.css';
import RegisterForm from './RegisterForm/RegisterForm';
import RegisterImg from './RegisterForm/RegisterImg';

// Página de registro

function Register(){
  // Se utilizan los componentes del Regsitro y la Imagen del formulario de Registro
  return (
  <div>
    <Container fluid>
      <Row className="login-Row">
        <Col>
            <RegisterImg></RegisterImg>
        </Col>
        <Col>
            <RegisterForm></RegisterForm>
        </Col>
      </Row>
    </Container>
  </div>
)}
export default Register;