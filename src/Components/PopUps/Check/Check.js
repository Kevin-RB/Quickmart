import React from 'react';
import Form from 'react-bootstrap/Form';
import './Check.css';

// Componente de los checks en la selección de pago
function Check({text}) {

    return (
     <div className="check-container">
            <Form.Group controlId="formBasicCheckbox">
                   <Form.Check className="o-check-style"
                         type="radio"
                         label={text}
                         name="formHorizontalRadios"
                         id="formHorizontalRadios1"
              />
              </Form.Group>

     </div>
    );
  }
  export default Check;
