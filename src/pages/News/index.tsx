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
      {/* <div className="grid 2xl:grid-cols-5 grid-cols-1 gap-4 my-4 sm:px-20 md:px-40 px-10">
        <div className="col-span-3 p-4 2xl:border-r-2 border-r-0 border-gray-500 text-left">
          <img
            onClick={() => goNewLink(feeds[0]?.link)}
            className="cursor-pointer mb-4"
            width="100%"
            src={feeds[0]?.enclosure.link}
            alt="No Img"
          />
          <span
            className="sm:text-4xl text-xl font-bold hover:underline cursor-pointer"
            onClick={() => goNewLink(feeds[0]?.link)}
          >
            {feeds[0]?.title}
          </span>
        </div>
        <div className="col-span-2">
          {feeds.slice(1, 4).map((val, key) => {
            return (
              <Card key={key} className="mb-8 p-4 static">
                <div className="sm:flex text-center sm:text-left p-4">
                  <img
                    className="2xl:w-56 w-full h-40 my-2"
                    src={val.enclosure.link}
                    alt="Not found img"
                  />
                  <div className="ml-4 h-32 overflow-hidden">
                    <p
                      className="text-xl hover:underline cursor-pointer text-black"
                      onClick={() => {
                        goNewLink(val.link);
                      }}
                    >
                      {val.title}
                    </p>
                    <p>{val.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div> */}
      <div className="grid 2xl:grid-cols-5 grid-cols-4 gap-4 my-4 sm:px-20 md:px-40 px-10">
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-4 overflow-hidden">
            <div className="col-span-1">
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
                className="cursor-pointer mb-4 h-full"
                width="100%"
                src={feeds[0]?.enclosure.link}
                alt="No Img"
              />
            </div>
            <div className="col-span-1">
              <img
                onClick={() => goNewLink(feeds[1]?.link)}
                className="cursor-pointer mb-4"
                width="100%"
                src={feeds[1]?.enclosure.link}
                alt="No Img"
              />
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
              <img
                onClick={() => goNewLink(feeds[2]?.link)}
                className="cursor-pointer mb-4"
                width="100%"
                src={feeds[2]?.enclosure.link}
                alt="No Img"
              />
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[2]?.link)}
              >
                {feeds[2]?.title}
              </span>
            </div>
            <div className="col-span-1">
              <img
                onClick={() => goNewLink(feeds[3]?.link)}
                className="cursor-pointer mb-4"
                width="100%"
                src={feeds[3]?.enclosure.link}
                alt="No Img"
              />
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[3]?.link)}
              >
                {feeds[3]?.title}
              </span>
            </div>
            <div className="col-span-1">
              <img
                onClick={() => goNewLink(feeds[4]?.link)}
                className="cursor-pointer mb-4"
                width="100%"
                src={feeds[4]?.enclosure.link}
                alt="No Img"
              />
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[4]?.link)}
              >
                {feeds[4]?.title}
              </span>
            </div>
            <div className="col-span-1">
              <img
                onClick={() => goNewLink(feeds[5]?.link)}
                className="cursor-pointer mb-4"
                width="100%"
                src={feeds[5]?.enclosure.link}
                alt="No Img"
              />
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[5]?.link)}
              >
                {feeds[5]?.title}
              </span>
            </div>
          </div>
        </div>
        -<div className="col-span-1">123</div>
      </div>
    </div>
  );
};

export default NewsPage;
