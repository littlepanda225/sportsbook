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

  useEffect(() => {}, []);

  return (
    <div className="mx-auto w-full pt-2 px-4 lg:px-8 lg:pt-4 bg-white">
      <div className="mx-auto flex items-center justify-center relative">
        <img
          src="./moneyline_sportsbook_logo.png"
          className="sm:h-12 h-10"
          alt=""
        />
        <div className="absolute sm:right-2 right-0">
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
              <button className="text-black bg-white hover:bg-blue-300 font-bold py-2 px-4 rounded">
                <MenuIcon width={24} height={24}></MenuIcon>
              </button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <a href="/home" className="flex items-center">
                  Home
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/home" className="flex items-center">
                  Sign-up
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/home" className="flex items-center">
                  Login
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/home" className="flex items-center">
                  Odds
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/home" className="flex items-center">
                  News
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="flex md:justify-center justify-start p-2 gap-x-16 overflow-auto">
        {headItems.map((val, key) => {
          return (
            <div className="font-bold hover:text-blue-700 p-1" key={key}>
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
