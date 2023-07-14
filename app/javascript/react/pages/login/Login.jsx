import React, { useContext } from 'react';
import { Container } from './styled';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const context = useContext(CreateContext);
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post('/login', data)
      .then((response) => {
        console.log(response.data.user);
        const userData = response.data.user;
        context.setUser(userData);
        context.setIsLogged(true);
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
        // Trate o erro, exiba uma mensagem de erro, etc.
      });
  };

  return (
    <>
      <Container>
        <div>
          <h1>Faça Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email')} placeholder="Digite seu email" /> <br />
            <input type="password" {...register('password')} placeholder="Digite sua senha" /> <br />
            <button type="submit">login</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
