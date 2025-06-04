import React, { useContext,useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import { PostsContext } from "../Contexts/PostProvider";
import Popular from "../Card/Popular";
import TextDivder from "../Comonents/TextDivder";
import CommentsCard from "../Card/CommentsCard";

const ReadPost = () => {

  const { id } = useParams();
  const { err, post } = useFetch(
    `https://tomato-backend-mu.vercel.app/api/posts/${id}`
  );
  const {posts} = useContext(PostsContext)
  const comments = post?.comments
  console.log(err);
      // This is for title dynamic
    useEffect(()=>{
        document.title = post.title
    },[post])
  return (
    <div className="w-full md:max-w-7xl mx-auto md:flex">
      <div className=" md:w-2/3 h-auto  px-6">
        <div className="w-full md:h-[20rem]">
          <img
            src={`${post.thumbnail}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto px-4">
          <h1 className="text-4xl font-bold mt-3">{post?.title}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: post?.content }}
            className="mt-4"
          ></p>
        </div>
        <div className="mb-4">
            <TextDivder text="Comments"/>
        </div>
        <div>
            {comments?.map((comment)=>(
                <CommentsCard key={comment.cId} comment={comment}/>
            ))}
        </div>
        </div>



      <div className="w-full md:w-1/3 h-screen overflow-scroll scroll-hidden px-4">
        <h1 className="text-2xl font-bold my-4">Popular Posts</h1>
        <div className="flex flex-col gap-2">
          {posts.map((post) => (
            <Popular post={post} key={post.postId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadPost;
