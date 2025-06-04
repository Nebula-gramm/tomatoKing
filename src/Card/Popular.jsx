import { Link } from "react-router-dom";


const Popular = ({post}) => {
    return (
    <div className="md:flex w-full">
      <div className="w-1/4 h-[5rem]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`${post.thumbnail}`}
          alt=""
        />
      </div>
      <div className="w-3/4 h-auto px-2 cursor-pointer">
        <Link to={`/posts/${post.postId}`}><h1 className="text-xl font-bold hover:text-red-600 ">{post.title}</h1></Link>
      </div>
    </div>
    );
};

export default Popular;