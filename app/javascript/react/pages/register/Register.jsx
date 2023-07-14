import React, { useEffect } from 'react';
import { Container } from './styled';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('/csrf-token');
        axios.defaults.headers.common['X-CSRF-Token'] = response.data.csrfToken;
      } catch (error) {
        console.error(error);
      }
    };

    fetchCsrfToken();
  }, []);

  const onSubmit = (data) => {
    axios
      .post('/users', data)
      .then((response) => {
        console.log(response.data);
        navigate('/login')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Container>
        <div>
          <h1>Faça seu Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')} placeholder="Digite seu nome" /> <br />
            <input type="email" {...register('email')} placeholder="Digite seu email" /> <br />
            <input type="password" {...register('password')} placeholder="Digite sua senha" /> <br />
            <button type="submit">cadastrar</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;
