import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../Login/loginForm/LoginForm.css';

// Componente para crear el formulario del Registro
function RegisterForm() {
    return (
        // Contenedor del Registro
        <div className="login-Form">
            <div className="form-container">
                <div>
                    <h1 className="form-title">
                    Crea tu cuenta
                    </h1>
                </div>
                {/* Formulario del Registro */}
                <div className="form">
                    <Form>
                    <Form.Group controlId="formGroupEmail">
                            <Form.Label>Nombre </Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Número de celular</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control className="form-control" type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control className="form-control" type="password" placeholder="" />
                        </Form.Group>
                        <Button className="form-btn" type="submit" href="/Login">
                            <strong>Registrarse</strong>
                    </Button>
                    </Form>
                </div>
                {/* Link de redirección al Login */}
                <p className="login-redirect">¿Ya tienes cuenta? <a href="/Login"><strong>Inicia sesión</strong></a></p>
            </div>
        </div>
    );
}

export default RegisterForm;