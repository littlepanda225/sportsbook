import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const NavbarComponent: React.FC = () => {

  useEffect(() => {}, []);

  return (
    <div className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <img src="./moneyline_sportsbook_logo.png" className="h-16" alt="" />

        <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <MenuHandler>
            <Button variant="gradient">Open Menu</Button>
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
  );
};

export default NavbarComponent;
