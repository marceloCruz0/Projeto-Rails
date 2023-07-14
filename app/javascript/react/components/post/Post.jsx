import React, { useContext } from 'react';
import { Container, Vectors, InlineButton } from './styled';
import { AiTwotoneEdit } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CreateContext } from '../../context/CreateContext';

const Post = ({ post, onDeletePost }) => {

  const context = useContext(CreateContext);
  const isUserOwner = context.user.id === post.attributes.user_id;

  const handleDeletePost = () => {
    onDeletePost(post.id);
  };

  return (
    <Container>
      <h3>{post.attributes.title}</h3>
      <p>{post.attributes.content}</p>
      <small>{post.attributes.user_name}</small>
      <small>{post.attributes.created_at}</small>
      <InlineButton>
        <Link to={`/post/${post.id}`} >
          Veja mais &rarr;
        </Link>
      </InlineButton>
      <Vectors>
        {isUserOwner && (
          <Link to={`/editpost/${post.id}`}>
            <AiTwotoneEdit />
          </Link>
        )}
        {isUserOwner && <IoMdTrash onClick={handleDeletePost} />}
      </Vectors>
    </Container>
  );
};

export default Post;
