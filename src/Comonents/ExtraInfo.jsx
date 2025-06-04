import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const ExtraInfo = () => {
  return (
    <div className="w-full h-auto bg-gray-300 flex flex-col justify-center items-center py-4">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl">More Details</h1>
            <div className="flex gap-x-3 justify-center ">
                <MdEmail className=" text-2xl mt-1 text-red-600" /> <span className="text-xl ">contact@tomatoKing.blog</span>
            </div>
            <div className="flex gap-x-3 justify-center ">
                <FaPhone className=" text-2xl mt-1 text-red-600" /> <span className="text-xl ">+880 122XXXXXXX      </span>
            </div>
        </div>
    </div>
  );
};

export default ExtraInfo;
