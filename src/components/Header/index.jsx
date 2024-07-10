import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAuthIcon from "../../assets/icon/authentication-icon.svg";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import ProfileIcon from "../../assets/icon/profile.svg";
const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="bg-[#FFFFFFF] border-[#367CFF] border-b-[1px] border-solid h-[80px] flex items-center justify-start text-left shadow-lg">
      <div className="max-w-[1440px] mx-auto w-full flex justify-between px-[18px] sm:px-[34px]">
        <div className="flex">
          <img
            src={UserAuthIcon}
            alt="Schedule Icon"
            className="w-[40px] h-[40px]"
          />
          <div className="text-[20px] sm:text-[25px] text-[#367CFF] ml-[15px]">
            Welcome to Blog App
          </div>
        </div>
        {userLoggedIn ? (
          <div>
            <div className="relative inline-block text-left">
              <div>
                <button
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
                          navigate("/login");
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
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
