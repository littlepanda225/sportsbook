import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import MenuIcon from "../../components/Icons/MenuIcon";

const NavbarComponent: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 bg-white">
      <div className="mx-auto flex items-center justify-center relative">
        <img
          src="./moneyline_sportsbook_logo.png"
          className="sm:h-12 h-8"
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
    </div>
  );
};

export default NavbarComponent;
