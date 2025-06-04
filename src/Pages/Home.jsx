import React, { useContext, useEffect } from "react";
import Featured from "./../Card/Featured";
import TextDivder from "./../Comonents/TextDivder";
import { PostsContext } from "../Contexts/PostProvider";
import PostCard from "../Card/PostCard";
import Popular from "../Card/Popular";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(()=>{
  document.title= "Home | tomatoKing"
  },[])
  const {posts} = useContext(PostsContext)
  return (

    <div className="w-full md:max-w-7xl mx-auto md:flex">
      <div className=" md:w-2/3 h-auto  px-6">
        <TextDivder text={"Featured Post"} />
        <div className="mt-4">
          <Featured />
        </div>
        <TextDivder text={"All Posts"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto my-4">
          {posts.map((post) => (
            <PostCard post={post} key={post.postId} width='md:w-full'></PostCard>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 h-screen overflow-scroll scroll-hidden px-4">
          <h1 className="text-2xl font-bold my-4">Popular Posts</h1>
          <div className="flex flex-col gap-2">
            {posts.map((post)=>(
              <Popular post={post} key={post.postId}/>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Home;
