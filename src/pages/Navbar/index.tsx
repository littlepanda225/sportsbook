import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { MenuIcon, CloseIcon } from "../../components/Icons";

const NavbarComponent: React.FC = () => {
  const [showResponsiveBar, setShowResponsiveBar] = useState<boolean>(false);
  const location = useLocation();
  const headItems = [
    {
      href: "/nba",
      title: "NBA",
    },
    {
      href: "/ncaafb",
      title: "NCAAFB",
    },
    {
      href: "/nfl",
      title: "NFL",
    },
    {
      href: "/nhl",
      title: "NHL",
    },
    {
      href: "/wnba",
      title: "WNBA",
    },
  ];
  const menuItem = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/signup",
      title: "Sing Up",
    },
    {
      href: "/login",
      title: "Login",
    },
    {
      href: "/odds",
      title: "Odds",
    },
    {
      href: "/news",
      title: "News",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="mx-auto w-full bg-white">
      <div className="mx-auto flex items-center justify-center relative py-2">
        <img
          src="./moneyline_sportsbook_logo.png"
          className="sm:h-12 h-10"
          alt=""
        />
        <div className="absolute left-0 block sm:hidden">
          <button
            className="text-black bg-white font-bold p-2 rounded"
            onClick={() => setShowResponsiveBar(!showResponsiveBar)}
          >
            <MenuIcon width={24} height={24}></MenuIcon>
          </button>
        </div>
        <div className="absolute right-0 hidden sm:block">
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 50 },
            }}
          >
            <MenuHandler>
              <button className="text-black bg-white hover:bg-blue-300 font-bold p-2 rounded">
                <MenuIcon width={24} height={24}></MenuIcon>
              </button>
            </MenuHandler>
            <MenuList className="bg-midenite-blue text-white">
              {menuItem.map((val, key) => {
                return (
                  <MenuItem
                    className="hover:bg-[#ffffff12] hover:text-white"
                    key={key}
                  >
                    <a href={val.href} className="flex items-center">
                      {val.title}
                    </a>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex sm:justify-center justify-start p-2 gap-x-16 overflow-auto bg-midenite-blue">
          {headItems.map((val, key) => {
            return (
              <div
                className="text-white font-bold hover:text-blue-700 p-1"
                key={key}
              >
                <a href={val.href} className="flex items-center">
                  {val.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`transform w-60 z-40 h-full absolute top-0 px-2 bg-midenite-blue shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out ${
          showResponsiveBar ? "" : "-translate-x-60"
        }`}
      >
        <div className="flex justify-end my-4">
          <button
            className="cursor-pointer"
            onClick={() => setShowResponsiveBar(!showResponsiveBar)}
          >
            <CloseIcon width={25} height={25} color="#FFFFFF" />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-300 text-left font-semibold bg-[#ffffff12] py-2 px-4">
            Menu
          </div>
          {menuItem.map((val, key) => {
            return (
              <div
                className="text-gray-300 text-left font-semibold py-2 px-8 cursor-pointer"
                key={key}
              >
                <a href={val.href}>{val.title}</a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <div className="text-gray-300 text-left font-semibold bg-[#ffffff12] py-2 px-4">
            SPORTS
          </div>
          {headItems.map((val, key) => {
            return (
              <div
                className="text-gray-300 text-left font-semibold py-2 ml-4 px-8 cursor-pointer"
                key={key}
              >
                <a href={val.href}>{val.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
