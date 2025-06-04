import { useEffect } from "react";
import ExtraInfo from "../Comonents/ExtraInfo";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Me | tomatoKing";
  }, []);
  return (
    <div className="w-full md:max-w-7xl mx-auto">
      <div className="w-full md:h-96 h-52 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 flex justify-center items-center">
        <h1 className="md:px-40 px-24 py-10 bg-white md:text-4xl text-2xl font-extrabold">
          Contact Me
        </h1>
      </div>
      <div className="w-full h-auto block md:flex gap-x-6 bg-gray-300 mt-12 pb-4">
        <div className="w-1/2">
          <img
            src="/src/assets/undraw_contact-us_kcoa.svg"
            alt=""
            className="w-full object-cover py-12"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mt-6 mx-4">Contact Form</h1>
          <div className="w-full mt-6 ml-10 flex flex-col justify-center items-center">
            <div className="w-full">
              <legend className="fieldset-legend">Your name</legend>
              <label className="floating-label">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-md"
                />
                <span>Name</span>
              </label>
            </div>
            <div className="w-full ">
              <legend className="fieldset-legend">Your Email</legend>
              <label className="floating-label">
                <input
                  type="text"
                  placeholder="you@gamil.com"
                  className="input input-md"
                />
                <span>Email</span>
              </label>
            </div>
            <div className="w-full">
              <legend className="fieldset-legend">Let's Talk</legend>
              <fieldset className="fieldset">
                <textarea
                  className="textarea h-24"
                  placeholder="What's Your Mind....."
                ></textarea>
                <button className="btn btn-outline btn-primary w-2/4 my-3">Submit</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <ExtraInfo/>
    </div>
  );
};

export default Contact;
