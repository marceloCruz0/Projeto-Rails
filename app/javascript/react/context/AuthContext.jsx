import React, { useState } from 'react'

const AuthContext = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    return {
        isLogged, setIsLogged, user, setUser, posts, setPosts,
    };
};

export default AuthContext;