import React, { useState } from "react";
import { navbarData } from "../../DataForPage/dummyData";
import { motion } from "framer-motion";

const MobileNavContainer = ({ setOpen }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuPath) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuPath]: !prevState[menuPath],
    }));
  };

  const renderSubMenu = (subMenu, level = 1, parentPath = "") => {
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className={`pl-${level * 4} space-y-2`}
        style={{ overflowX: "hidden", maxWidth: "100%" }}
      >
        {subMenu.map((subItem, index) => {
          const currentPath = `${parentPath}-${index}`;

          return (
            <div key={subItem.id}>
              {subItem.submenu ? (
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer p-2 bg-gray-800 rounded"
                    onClick={() => toggleMenu(currentPath)}
                    style={{ maxWidth: "100%" }}
                  >
                    <span className="text-sm text-gray-400 hover:text-white">
                      {subItem.name}
                    </span>
                    <span className="text-gray-400">
                      {openMenus[currentPath] ? (
                        <>&#9650;</> // Up arrow
                      ) : (
                        <>&#9654;</> // Right arrow
                      )}
                    </span>
                  </div>
                  {openMenus[currentPath] &&
                    renderSubMenu(subItem.submenu, level + 1, currentPath)}
                </div>
              ) : (
                <a
                  href={subItem.link}
                  className="block text-sm text-gray-400 hover:text-white p-2"
                  onClick={() => setOpen(false)} // Close menu on click
                  style={{ maxWidth: "100%" }}
                >
                  {subItem.name}
                </a>
              )}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black h-screen w-full p-2 overflow-auto"
      style={{ overflowX: "hidden" }}
    >
      <button
        className="self-end text-2xl font-bold text-white"
        onClick={() => setOpen(false)}
      >
        &times;
      </button>

      <div className="mt-8 space-y-4">
        {navbarData.map((item, index) => {
          const currentPath = `${index}`;

          return (
            <div key={item.id} style={{ maxWidth: "100%" }}>
              {item.submenu ? (
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer p-3 bg-gray-800 rounded"
                    onClick={() => toggleMenu(currentPath)}
                    style={{ maxWidth: "100%" }}
                  >
                    <h3 className="text-lg font-medium text-white">
                      {item.name}
                    </h3>
                    <span className="text-white">
                      {openMenus[currentPath] ? (
                        <>&#9650;</> // Up arrow
                      ) : (
                        <>&#9654;</> // Right arrow
                      )}
                    </span>
                  </div>
                  {openMenus[currentPath] &&
                    renderSubMenu(item.submenu, 1, currentPath)}
                </div>
              ) : (
                <a
                  href={item.link}
                  className="block text-lg text-white font-medium hover:text-blue-500 p-3 bg-gray-800 rounded"
                  onClick={() => setOpen(false)} // Close menu on click
                  style={{ maxWidth: "100%" }}
                >
                  {item.name}
                </a>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <button
          onClick={() => setOpen(false)}
          className="w-full bg-purple-500 text-white font-medium py-3 px-6 rounded-lg text-lg flex items-center justify-center"
          style={{ maxWidth: "100%" }}
        >
          Schedule a meeting &rarr;
        </button>
      </div>
    </div>
  );
};

export default MobileNavContainer;
