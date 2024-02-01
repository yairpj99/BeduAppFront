import React from 'react';
import { Box, Input } from '@chakra-ui/react'; // Asegúrate de tener instalada la librería @chakra-ui/react
import '../Styles/Login.css';
import logo from '../../assets/logoSiGoApp.png';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, enviar los datos a un servidor para la autenticación
  };

  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div>
          <a className="title1">INGRESAR</a>
          <hr />
        </div>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Correo electrónico"
            className="input"
            required
          />
            <Input
            type="password"
            placeholder="Contraseña"
            className="input"
            required
          />
          <button type="submit" className="button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
