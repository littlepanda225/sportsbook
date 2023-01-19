import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-tailwind/react";

const NewsPage = () => {
  const [feeds, setFeeds] = useState<Array<any>>([]);
  const [topStories, setTopStories] = useState<Array<any>>([]);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fespn.com%2Fespn%2Frss%2Fnba%2fnews`
      )
      .then((res) => {
        setFeeds(res.data.items);
        setData(res.data.feed);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.espn.com%2Fespn%2Frss%2Fnews`
      )
      .then((res) => {
        console.log(res.data.items);
        setTopStories(res.data.items);
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
      <div className="grid 2xl:grid-cols-5 grid-cols-1 gap-4 my-4 px-12">
        <div className="col-span-3 p-4 border-r-2 border-gray-500 text-left">
          <img
            onClick={() => goNewLink(feeds[0]?.link)}
            className="cursor-pointer mb-4"
            width="100%"
            src={feeds[0]?.enclosure.link}
            alt="No Img"
          />
          <span
            className="sm:text-5xl text-xl font-bold hover:underline cursor-pointer"
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
                    className="w-56 my-2 aspect-square"
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
      </div>
    </div>
  );
};

export default NewsPage;
