import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#2F2F2F] text-neutral-content p-10 ">
      <nav>
        <span className="text-2xl font-extrabold text-red-400 cursor-pointer">tomatoKing</span>
        <p>A ultimate blog of Tech industry, Science , Technology , <br /> Blockchain & Web3.</p>
        <p className="">_____.The Future is Behind._____</p>
      </nav>
      <nav>
        <h6 className="footer-title">FOLLOW ME</h6>
          <div className="flex gap-4">
            <FaFacebook className="w-[30px] h-[30px] cursor-pointer"/>
            <FaTelegram  className="w-[30px] h-[30px] cursor-pointer "/>
            <FaSquareXTwitter className="w-[30px] h-[30px] cursor-pointer "/>
          </div>
      </nav>
      <nav>
        <h6 className="footer-title">NEWS LATTER</h6>
        <p>Subscribe to get Updated!</p>
        <div>
          <input type="email" placeholder="Enter your email" className="px-4 py-2 bg-white text-black rounded-l-xl" required/>
          <button className="px-2 py-2 bg-amber-700 rounded-r-xl cursor-pointer hover:scale-102">Subscribe</button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
