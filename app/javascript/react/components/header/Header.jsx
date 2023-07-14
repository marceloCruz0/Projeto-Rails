import React, { useContext } from 'react'
import { CreateContext } from '../../context/CreateContext';
import { Container } from './styled';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const context = useContext(CreateContext);
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const handleLogout = async () => {
    try {
      const response = await axios.delete('/logout');
      if (response.status === 200) {
        console.log('Logout bem-sucedido');
        context.setIsLogged(false)
      } else {
        console.log('Erro no logout:', response.data.error);
      }
    } catch (error) {
      console.log('Erro na solicitação:', error);
    }
  };

  return (
    <>
      <Container>
        <img src="/Walljobs.png" alt="Walljobs logo" onClick={() => navigate('/')} ></img>
        <ul>
          {!context.isLogged ? (
            <>
              <li><Link to="/register">Registrar</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/createpost">Criar Post</Link></li>
              <li><Link to="/delete" onClick={handleSubmit(handleLogout)}>Sair</Link></li>
            </>
          )}

        </ul>

      </Container>
    </>
  )
}

export default Header