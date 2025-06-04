import { useContext, useEffect } from "react";
import PostCard from "../Card/PostCard";
import { PostsContext } from "../Contexts/PostProvider";

const Posts = () => {
    useEffect(() => {
    document.title = "Posts | tomatoKing";
  }, []);
  const { posts } = useContext(PostsContext);
  return (
      <div className=" md:my-12 w-full  my-4 flex flex-wrap gap-4 justify-center">
        {posts.map((post) => (
          <PostCard post={post} key={post.postId} width='md:w-[400px]'></PostCard>
        ))}
      </div>
  );
};

export default Posts;
