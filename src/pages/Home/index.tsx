import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-tailwind/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Carousel from "./Carousel";

type CustomDotProp = {
  active: any;
  onClick: any;
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 4,
  },
  desktop2: {
    breakpoint: { max: 1500, min: 1200 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Home: React.FC = () => {
  const [feeds, setFeeds] = useState<Array<any>>([]);
  const [featuredFeed, setFeaturedFeed] = useState<Array<any>>([]);
  const [topStories, setTopStories] = useState<Array<any>>([]);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fespn.com%2Fespn%2Frss%2Fnba%2fnews`
      )
      .then((res: any) => {
        setFeeds(res.data.items);
        setData(res.data.feed);
      })
      .catch((err: any) => {
        console.log(err);
      });

    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.espn.com%2Fespn%2Frss%2Fnews`
      )
      .then((res) => {
        setFeaturedFeed(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.espn.com%2Fespn%2Frss%2Fnews`
      )
      .then((res) => {
        setTopStories(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goNewLink = (url: string) => {
    window.open(url);
  };

  const CustomDot = ({ active, onClick }: CustomDotProp) => {
    return (
      <button
        className={`relative mb-6 px-3 py-1 mr-2 bg-blue-500 transition-all hover:px-6 hover:bg-opacity-100 rounded-lg ${
          active ? "px-6 bg-opacity-100" : "bg-opacity-70"
        }`}
        onClick={() => onClick()}
      ></button>
    );
  };

  return (
    <div className="">
      <div className="grid 2xl:grid-cols-5 grid-cols-1 gap-4 my-4 px-40">
        <div className="col-span-1">
          {feeds.slice(1, 4).map((val, key) => {
            return (
              <Card key={key} className="mb-6 p-2 static">
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
        <div className="col-span-2 p-4 px-8 border-r-2 border-l-2 border-gray-500">
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
        <div className="col-span-1 py-4">
          <span className="text-3xl font-bold">Top Stories</span>
          <div className="border-t-2 border-black mt-2">
            {topStories.slice(0, 5).map((val, key) => {
              return (
                <Card className="p-4 static mb-4" key={key}>
                  <span
                    className="cursor-pointer hover:underline text-xl"
                    onClick={() => goNewLink(val.link)}
                  >
                    {val.title}
                  </span>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-black md:px-20 lg:px-36 px-10 py-8 relative">
        <div className="border-b-2 border-white p-2">
          <p className="text-white text-3xl text-bold">Featured</p>
        </div>
        {/* <Carousel></Carousel> */}
        <Carousel
          showDots
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          renderDotsOutside={true}
          arrows={true}
          infinite={true}
          customDot={<CustomDot active={undefined} onClick={undefined} />}
        >
          {featuredFeed.map((val, key) => {
            return (
              <div key={key} className="text-white m-4">
                <img
                  className="w-full h-64 aspect-square mb-4"
                  src={val.enclosure.link}
                  alt=""
                />
                <span
                  className="text-bold md:text-xl text-lg cursor-pointer hover:underline"
                  onClick={() => goNewLink(val.link)}
                >
                  {val.title}
                </span>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
