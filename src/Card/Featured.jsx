
import { Link } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import { FaCalendarAlt } from "react-icons/fa";

const Featured = () => {
    const {err, post} = useFetch('https://tomato-backend-mu.vercel.app/api/posts/3')
    console.log(err)
    const content = post?.content
    const slicePost = content?.slice(0,200)+ "....."
  return (
    <div className="md:flex w-full">
      <div className="w-full md:w-1/2 h-[26rem]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`${post.thumbnail}`}
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 h-auto px-4 py-4 cursor-pointer">
        <Link to={`/posts/${post.postId}`}><h1 className="text-3xl font-bold hover:text-red-600 ">{post.title}</h1></Link>
        <p dangerouslySetInnerHTML={{ __html: slicePost }}></p>
        <p className="flex gap-1 mt-2"><FaCalendarAlt className="mt-1"/> <span className="text-red-400 font-bold">{post.date}</span></p>
      </div>
    </div>
  );
};

export default Featured;
