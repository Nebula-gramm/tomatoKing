import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const MenuList = () => (
    <>
      <li>
        <NavLink to="/" className={({isActive})=>
          isActive? "text-blue-600": "text-black"
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/posts" className={({isActive})=>
          isActive? "text-blue-600": "text-black"
        }>Posts</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({isActive})=>
          isActive? "text-blue-600": "text-black"
        }>About</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({isActive})=>
          isActive? "text-blue-600": "text-black"
        }>Contact Me</NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-white w-full border-b-1 shadow-xs">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2"><Link to="/"><span className="text-2xl font-extrabold text-red-400 cursor-pointer">tomatoKing</span></Link></div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal font-bold">
              {/* Navbar menu content here */}
              <MenuList />
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 font-bold">
          {/* Sidebar content here */}
          <MenuList />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
