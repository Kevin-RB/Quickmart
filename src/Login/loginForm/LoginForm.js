import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LoginForm.css';

// Componente para crear el formulario del Login
function LoginForm() {
    return (
        // Contenedor del Login
        <div className="login-Form">
            <div className="form-container">
                <div>
                    <h1 className="form-title">
                        Inicia sesión
                    </h1>
                </div>
                {/* Formulario del Login */}
                <div className="form">
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control className="form-control" type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control className="form-control" type="password" placeholder="" />
                        </Form.Group>
                        <Button className="form-btn " type="submit" href="/">
                            <strong>Iniciar sesión</strong>
                        </Button>
                    </Form>
                </div>
                {/* Link de redirección al registro */}
                <p className="login-redirect">¿No tienes cuenta? <a href="/Register"><strong>Regístrate</strong></a></p>
            </div>
        </div>
    );
}

export default LoginForm;