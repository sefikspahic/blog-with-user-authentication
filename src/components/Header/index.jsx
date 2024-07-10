import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserAuthIcon from "../../assets/icon/authentication-icon.svg";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import ProfileIcon from "../../assets/icon/profile.svg";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target) 
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const isActiveLink = (path) => {
    return location.pathname === path ? "text-[#367CFF] cursor-default" : "text-white";
  };

  return (
    <header className="bg-[#FFFFFFF] border-[#367CFF] border-b-[1px] border-solid h-[80px] flex items-center justify-start text-left shadow-lg">
      <div className="max-w-[1440px] mx-auto w-full flex justify-between px-[10px] sm:px-[34px]">
        <div className="flex items-center">
            <Link className="flex" to={"/"}>
          <img
            src={UserAuthIcon}
            alt="Schedule Icon"
            className="w-[30px] sm:w-[40px] h-[40px]"
          />
          <div className="text-[20px] sm:text-[25px] max-md:hidden text-white ml-[15px]">
            Welcome to Blog App
          </div></Link>
          {userLoggedIn ? (<div><Link to={"create-post"} className={`${isActiveLink("/create-post")} mx-[10px] sm:mx-[20px]`} >
            Create new blog
          </Link>

          <Link  className={`${isActiveLink("/")} mx-[10px] sm:mx-[20px]`}  to={"/"}>
            View All Blogs
          </Link> </div> ) : (
            <></>
          )}
        </div>  
        {userLoggedIn ? (
          <div>
            <div className="relative inline-block text-left">
              <div>
                <button
                ref={menuButtonRef}
                  onClick={() => setDropdown(!dropdown)}
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <img src={ProfileIcon} alt="" className="w-[20px]" />
                </button>
              </div>
              {dropdown ? (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  ref={dropdownRef}
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <div
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700  border-b-[1px] border-black"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Hi,
                      {currentUser.displayName
                        ? currentUser.displayName
                        : currentUser.email}
                    </div>
                    <button
                      onClick={() => {
                        doSignOut().then(() => {
                          navigate("/");
                          setDropdown(false);
                        });
                      }}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <div>
          <Link to={"/login"} className=" inline-flex items-center justify-center rounded-xl bg-white py-3 px-6 font-dm text-base font-medium text-black shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]">
            Login
          </Link>
          <Link to={"/register"} className="ml-4 inline-flex items-center justify-center rounded-xl bg-blue-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]">
            Sign Up
          </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
