import React from "react";
import { Button } from "@material-tailwind/react";

const Header: React.FC = () => {
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

  return (
    <div className="flex justify-center py-2 gap-x-16">
      {headItems.map((val, key) => {
        return (
          <div className="font-bold hover:text-blue-700 p-1">
            <a href={val.href} className="flex items-center">
              {val.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
