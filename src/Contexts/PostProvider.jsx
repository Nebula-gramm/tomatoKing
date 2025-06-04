import React, { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://tomato-backend-mu.vercel.app/api/posts"
        );
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export default PostProvider;
