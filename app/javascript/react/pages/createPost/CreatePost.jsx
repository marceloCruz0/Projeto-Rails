import React, { useContext } from 'react';
import { Container } from './styled';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';

const CreatePost = () => {

  const context = useContext(CreateContext);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const post = {...data, image: data.image[0]}
    console.log(post)
    try {
      const response = await axios.post('/posts', post);
      console.log(response.data);
      reset();
    } catch (error) {
      console.error(error.response.data); // Erro ao criar o post
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <strong >Titulo:</strong>
          <input type="text" placeholder='Titulo do seu post...' {...register('title', { required: true })} />
          <input type="hidden" value={context.user.id} {...register('user_id', { required: true })} ></input>
          <input type="hidden" value={context.user.name} {...register('user_name', { required: true })} ></input>
          <strong >Conteúdo:</strong>
          <textarea placeholder='Conteúdo do seu post' {...register('content', { required: true })} />
          <input type="file" name="image"  {...register('image')} accept="image/*" />
          <button type="submit">criar post</button>
        </form>
      </Container>
    </>
  );
};

export default CreatePost;
