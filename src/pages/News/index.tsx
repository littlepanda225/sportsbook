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
    <div className="mt-28">
      <div className="grid 2xl:grid-cols-4 grid-cols-1 gap-4 my-4 p-12">
        <div className="col-span-1">
          {feeds.slice(1, 4).map((val, key) => {
            return (
              <Card key={key} className="mb-8 p-4 static">
                <div className="sm:flex text-center sm:text-left p-4">
                    <img
                      className="h-32 w-40"
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
        <div className="col-span-2 p-4 border-r-2 border-l-2 border-gray-500">
          <img
            onClick={() => goNewLink(feeds[0]?.link)}
            className="cursor-pointer"
            width="100%"
            src={feeds[0]?.enclosure.link}
            alt="No Img"
          />
        </div>
        <div className="col-span-1 py-4">
          <span className="text-3xl font-bold">Top Stories</span>
          <div className="border-t-2 border-black mt-2">
            {
              topStories.slice(0, 5).map((val, key) => {
                return (
                  <Card className="p-4 static mb-4" key={key}>
                    <span className="cursor-pointer hover:underline text-xl">{val.title}</span>
                  </Card>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
