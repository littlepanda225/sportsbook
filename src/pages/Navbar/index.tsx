import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { MenuIcon, CloseIcon } from "../../components/Icons";
import { NavLink } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  const [showResponsiveBar, setShowResponsiveBar] = useState<boolean>(false);
  const headItems = [
    {
      href: "/nba/1",
      title: "NBA",
    },
    {
      href: "/ncaafb",
      title: "NCAAFB",
    },
    {
      href: "/ncaam",
      title: "NCAAM",
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
    {
      href: "/new",
      title: "NEW",
    },
  ];
  const menuItem = [
    {
      href: "/home",
      title: "HOME",
    },
    {
      href: "/signup",
      title: "SIGN UP",
    },
    {
      href: "/login",
      title: "LOGIN",
    },
    {
      href: "/odds",
      title: "ODDS",
    },
    {
      href: "/news",
      title: "NEWS",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="mx-auto w-full fixed top-0">
      <div className="bg-white mx-auto flex items-center justify-center relative py-2">
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
              unmount: { y: 30 },
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
                    <NavLink
                      to={val.href}
                      type="button"
                      className="flex items-center"
                    >
                      {val.title}
                    </NavLink>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex sm:justify-center justify-start p-2 md:gap-x-10 gap-x-6 overflow-auto bg-midenite-blue">
          {headItems.map((val, key) => {
            return (
              <div
                className="text-white font-bold hover:text-green-500 p-1 flex"
                key={key}
              >
                <img
                  src={`/${val.title}.png`}
                  className="h-6 w-6 mr-2"
                  alt=""
                />
                <NavLink
                  to={val.href}
                  className="flex items-center"
                  type="button"
                >
                  {val.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`transform w-60 z-40 h-full fixed top-0 px-2 bg-midenite-blue shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out overflow-scroll ${
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
        <div className="flex flex-col mb-2">
          <div className="text-gray-200 text-left font-semibold bg-[#ffffff12] py-2 px-4 mb-2">
            Menu
          </div>
          {menuItem.map((val, key) => {
            return (
              <div
                className="text-gray-300 text-left font-semibold py-2 px-8 cursor-pointer"
                key={key}
              >
                <NavLink to={val.href} type="button">
                  {val.title}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <div className="text-gray-200 text-left font-semibold bg-[#ffffff12] py-2 px-4 mb-2">
            SPORTS
          </div>
          {headItems.map((val, key) => {
            return (
              <div
                className="text-gray-300 text-left font-semibold py-2 px-8 cursor-pointer flex items-center"
                key={key}
              >
                <img
                  src={`/${val.title}.png`}
                  className="h-6 w-6 mr-4"
                  alt=""
                />
                <NavLink to={val.href} type="button">
                  {val.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
