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
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home: React.FC = () => {
  const [feeds, setFeeds] = useState<Array<any>>([]);
  const [featuredFeed, setFeaturedFeed] = useState<Array<any>>([]);
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
  }, []);

  const goNewLink = (url: string) => {
    window.open(url);
  };

  const CustomDot = ({ active, onClick }: CustomDotProp) => {
    return (
      <button
        className={`relative mb-8 px-3 py-1 mr-2 bg-blue-500 transition-all hover:px-6 hover:bg-opacity-100 rounded-lg ${
          active ? "px-6 bg-opacity-100" : "bg-opacity-70"
        }`}
        onClick={() => onClick()}
      ></button>
    );
  };

  return (
    <div className="sm:mt-28 mt-16">
      <div className="grid 2xl:grid-cols-5 grid-cols-1 gap-4 my-4 p-12">
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
                    className="w-56 my-2"
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
      <div className="bg-black md:px-36 px-10 py-8 relative">
        <p className="text-white text-3xl text-bold">Featured</p>
        {/* <Carousel></Carousel> */}
        <div className="border-top-2 border-white">
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
                    className="text-bold md:text-2xl text-lg cursor-pointer hover:underline"
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
    </div>
  );
};

export default Home;
