import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostCard = ({post, width}) => {

  const content = post?.content
  const slicePost = content?.slice(0,200)+ "....."
  return (
    <div className={`w-full ${width} h-auto flex flex-col gap-3 shadow-xl hover:cursor-pointer`}>
      <div className='w-[300px] md:w-full h-[14rem] rounded-t-xl  overflow-hidden'>
        <img className='w-full h-full object-cover rounded-t-xl' src={`${post.thumbnail}`} alt=""/>
      </div>
      <div className='w-[300px] md:w-full h-auto p-4 cursor-pointer'>
        <Link to={`/posts/${post.postId}`}><h1 className='text-3xl font-bold hover:text-red-600 '>{post.title}</h1></Link>
        <p dangerouslySetInnerHTML={{ __html: slicePost }}></p>
        <p className="flex gap-1 mt-2"><FaCalendarAlt className="mt-1"/> <span className="text-red-400 font-bold">{post.date}</span></p>
      </div>
    </div>
  );
};

export default PostCard;
