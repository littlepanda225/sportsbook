import React, { useEffect } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import MenuIcon from "../../components/Icons/MenuIcon";

const NavbarComponent: React.FC = () => {
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
        <div className="absolute right-0">
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
                  <MenuItem className="hover:bg-[#ffffff12] hover:text-white" key={key}>
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
      <div className="flex md:justify-center justify-start p-2 gap-x-16 overflow-auto bg-midenite-blue">
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
  );
};

export default NavbarComponent;
