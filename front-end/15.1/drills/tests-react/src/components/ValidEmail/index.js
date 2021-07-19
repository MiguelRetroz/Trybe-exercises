import React from 'react';
import './style.css';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  const verifyResult = verifyEmail(email);
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {(email !== '')
        && <h3
          className={(verifyResult ? 'green-text' : 'red-text' )}
        >
          {(verifyResult ? 'Email Valido' : 'Email Inválido')}
        </h3>
      }
    </div>
  );
};

export default ValidEmail;