import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { Container, PostContainer } from './styled';
import { CreateContext } from '../../context/CreateContext';
import Post from '../../components/post/Post';

const Home = () => {
  const context = useContext(CreateContext);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/posts');
      context.setPosts(response.data.data);
      console.log(context.posts)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`/posts/${postId}`);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>Post dos usuários</h1>
      {context.posts && (
        <PostContainer>
          {context.posts.map((post) => (
            <Post post={post} key={post.id} onDeletePost={handleDeletePost} />
          ))}
        </PostContainer>
      )}
    </Container>
  );
};

export default Home;
