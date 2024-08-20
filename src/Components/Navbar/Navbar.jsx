import React, { useState, useEffect, useContext } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { navbarData } from "../../DataForPage/dummyData";
import qa from "../../assets/images/qa.png";
import { Link } from "react-scroll";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeBgContext);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  // Recursive function to render nested submenus
  const renderSubMenu = (submenu) => {
    return submenu.map((item) => (
      <MenuItem key={item.id} className="text-black hover:bg-gray-100">
        {item.submenu ? (
          <Menu placement="right-start">
            <MenuHandler>
              {/* Using a div with hover effect */}
              <div className="text-black hover:bg-gray-100 cursor-pointer">
                {item.name}
              </div>
            </MenuHandler>
            <MenuList className="bg-white shadow-lg">
              {renderSubMenu(item.submenu)}
            </MenuList>
          </Menu>
        ) : (
          <a
            href={item.link}
            className="block text-gray-700 py-1 hover:text-blue-500"
          >
            {item.name}
          </a>
        )}
      </MenuItem>
    ));
  };

  return (
    <div>
      <div
        className={
          scroll
            ? "sm:hidden h-16 w-full fixed flex transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20"
            : "sm:hidden bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20"
        }
      >
        <div className="grid grid-cols-3 justify-items-center items-center content-center w-full">
          <div className="pl-10 w-3/5">
            <img className="h-20" src={qa} alt="logo-img" />
          </div>
          <div className="flex flex-row items-center w-full">
            {navbarData.map((item) => (
              <div key={item.id} className="relative group">
                {item.submenu ? (
                  <Menu>
                    <MenuHandler>
                      {/* Using div with hover effect */}
                      <div
                        className={
                          theme === "light"
                            ? "text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500 cursor-pointer"
                            : "text-white font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500 cursor-pointer"
                        }
                      >
                        {item.name}
                      </div>
                    </MenuHandler>
                    <MenuList className="bg-white shadow-lg p-4">
                      {renderSubMenu(item.submenu)}
                    </MenuList>
                  </Menu>
                ) : (
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className={
                      theme === "light"
                        ? "cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                        : "cursor-pointer text-white font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
