import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-tailwind/react";

const NewsPage = () => {
  const [feeds, setFeeds] = useState<Array<any>>([]);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fespn.com%2Fespn%2Frss%2Fnba%2fnews`
      )
      .then((res) => {
        console.log(res.data.items);
        setFeeds(res.data.items);
        setData(res.data.feed);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goNewLink = (url: string) => {
    window.open(url);
  };

  return (
    <div>
      <div className="grid 2xl:grid-cols-5 grid-cols-4 gap-4 my-4 sm:px-20 lg:px-40 px-10">
        <div className="col-span-4">
          <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 gap-4 overflow-hidden">
            <div className="md:col-span-1 col-span-2 sm:block hidden">
              <span
                className="text-2xl font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[0]?.link)}
              >
                {feeds[0]?.title}
              </span>
              <br />
              <span className="text-gray-700">{feeds[0]?.description}</span>
            </div>
            <div className="col-span-2">
              <img
                onClick={() => goNewLink(feeds[0]?.link)}
                className="cursor-pointer mb-4"
                width="100%"
                src={feeds[0]?.enclosure.link}
                alt="No Img"
              />
            </div>
            <div className="col-span-1">
              <div className="h-48 w-full overflow-hidden">
                <img
                  onClick={() => goNewLink(feeds[1]?.link)}
                  className="cursor-pointer mb-4 w-full min-h-full"
                  src={feeds[3]?.enclosure.link}
                  alt="No Img"
                />
              </div>
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[1]?.link)}
              >
                {feeds[1]?.title}
              </span>
              <br />
              <span className="text-gray-700">
                {feeds[1]?.description.length > 100
                  ? feeds[1]?.description.substr(0, 100) + "..."
                  : feeds[1]?.description}
              </span>
            </div>
            <div className="col-span-1">
              <div className="h-48 w-full overflow-hidden">
                <img
                  onClick={() => goNewLink(feeds[2]?.link)}
                  className="cursor-pointer mb-4 w-full min-h-full"
                  src={feeds[2]?.enclosure.link}
                  alt="No Img"
                />
              </div>
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[2]?.link)}
              >
                {feeds[2]?.title}
              </span>
              <br />
              <span className="text-gray-700">
                {feeds[2]?.description.length > 100
                  ? feeds[2]?.description.substr(0, 100) + "..."
                  : feeds[2]?.description}
              </span>
            </div>
            <div className="col-span-1">
              <div className="h-48 w-full overflow-hidden">
                <img
                  onClick={() => goNewLink(feeds[3]?.link)}
                  className="cursor-pointer mb-4 w-full min-h-full"
                  src={feeds[3]?.enclosure.link}
                  alt="No Img"
                />
              </div>
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[3]?.link)}
              >
                {feeds[3]?.title}
              </span>
              <br />
              <span className="text-gray-700">
                {feeds[3]?.description.length > 100
                  ? feeds[3]?.description.substr(0, 100) + "..."
                  : feeds[3]?.description}
              </span>
            </div>
            <div className="col-span-1">
              <div className="h-48 w-full overflow-hidden">
                <img
                  onClick={() => goNewLink(feeds[4]?.link)}
                  className="cursor-pointer mb-4 w-full min-h-full"
                  src={feeds[4]?.enclosure.link}
                  alt="No Img"
                />
              </div>
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[4]?.link)}
              >
                {feeds[4]?.title}
              </span>
              <br />
              <span className="text-gray-700">
                {feeds[4]?.description.length > 100
                  ? feeds[4]?.description.substr(0, 100) + "..."
                  : feeds[4]?.description}
              </span>
            </div>
            <div className="col-span-1">
              <div className="h-48 w-full overflow-hidden">
                <img
                  onClick={() => goNewLink(feeds[5]?.link)}
                  className="cursor-pointer mb-4 w-full min-h-full"
                  src={feeds[5]?.enclosure.link}
                  alt="No Img"
                />
              </div>
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[5]?.link)}
              >
                {feeds[5]?.title}
              </span>
              <br />
              <span className="text-gray-700">
                {feeds[5]?.description.length > 100
                  ? feeds[5]?.description.substr(0, 100) + "..."
                  : feeds[5]?.description}
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="border-b-2 border-gray-600 py-2">
            <span
              className="font-bold text-2xl hover:underline cursor-pointer"
              onClick={() => goNewLink(feeds[5]?.link)}
            >
              {feeds[6]?.title}
            </span>
          </div>
          <div className="border-b-2 border-gray-600 py-2">
            <span
              className="font-bold text-2xl hover:underline cursor-pointer"
              onClick={() => goNewLink(feeds[5]?.link)}
            >
              {feeds[7]?.title}
            </span>
          </div>
          <div className="border-b-2 border-gray-600 py-2">
            <span
              className="font-bold text-2xl hover:underline cursor-pointer"
              onClick={() => goNewLink(feeds[5]?.link)}
            >
              {feeds[8]?.title}
            </span>
          </div>
          <div className="border-b-2 border-gray-600 py-2">
            <span
              className="font-bold text-2xl hover:underline cursor-pointer"
              onClick={() => goNewLink(feeds[5]?.link)}
            >
              {feeds[9]?.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
