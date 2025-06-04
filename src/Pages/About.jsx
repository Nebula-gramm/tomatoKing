import { useEffect } from "react";
import { MdOutlineComputer } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaBlogger } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

const About = () => {
  useEffect(() => {
    document.title = "About | tomatoKing";
  }, []);
  return (
    <div className="w-full md:max-w-7xl bg-gray-100 mx-auto py-12">
      <div className="w-5/6 bg-white h-auto mx-auto py-12 rounded-2xl shadow-2xl">
        <div className="w-[350px] h-[350px] mx-auto rounded-full">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profile"
            className="w-full h-full object-cover rounded-full mb-12"
          />
        </div>
        <div>
          <h1 className="text-center my-6 text-7xl font-bold ">
            Hi, I'm <span className="text-red-500"> Nebula</span>
          </h1>
          <h1 className="text-center my-4 text-3xl font-bold text-blue-600">
            Programmer <span className="text-black">|</span> AI Enthusiast <span className="text-black">|</span> Blogger
          </h1>
          <p className="text-center text-2xl mx-24">
            Welcome to my Blog{" "}
            <span className="text-red-500 font-bold text-3xl">tomatoKing</span>.
            I'm passionate about building cool web with code, exploring the
            world of Artificial Intelligence and Sharing what I learn with
            ethers. On this blog, I write my journey in tech, tutorials and a
            small tips on Web Development!
          </p>
        </div>

        {/* this part for skill */}

        <div className="px-20 mt-10">
          <h1 className="text-4xl font-bold">What I Do</h1>
          <div className="my-4">
            <div className="flex gap-x-3 text-3xl px-4 py-2 bg-gray-200 w-max rounded-xl my-3">
              <MdOutlineComputer className="-mt-1 text-5xl" />
              <h1>Web Development(HTML, CSS, JS, React)</h1>
            </div>
            <div className="flex gap-x-3 text-3xl px-4 py-2 bg-gray-200 w-max rounded-xl my-3">
              <GiArtificialIntelligence className="-mt-1 text-5xl" />
              <h1>AI & Machine Learning</h1>
            </div>
            <div className="flex gap-x-3 text-3xl px-4 py-2 bg-gray-200 w-max rounded-xl my-3">
              <FaBlogger className="-mt-1 text-5xl" />
              <h1>Blogging about tech, science & AI</h1>
            </div>
            <div className="flex gap-x-3 text-3xl px-4 py-2 bg-gray-200 w-max rounded-xl my-3">
              <GiArcheryTarget className="-mt-1 text-5xl" />
              <h1>Target a Web3 Developer</h1>
            </div>
          </div>
        </div>

        <div className="mt-10 px-20">
          <h1 className="text-4xl font-bold mb-2">Let's Connect</h1>
          <p className="text-3xl">
            Feel free to reach out if you did like to collaborate, ask questions
            or just say, "hi" !
          </p>
          <div className="mt-8 flex gap-x-4">
            <div className="flex text-3xl gap-x-1 text-blue-500 cursor-pointer">
              <MdOutlineEmail className=" text-4xl mt-0.5" />
              <h1>Email</h1>
            </div>
            <div className="flex text-3xl gap-x-1 text-blue-500 cursor-pointer">
              <FaGithub className=" text-4xl mt-0.5" />
              <h1>Github</h1>
            </div>
            <div className="flex text-3xl gap-x-1 text-blue-500 cursor-pointer">
              <RiLinkedinLine className=" text-4xl mt-0.5" />
              <h1>LinkedIn</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
