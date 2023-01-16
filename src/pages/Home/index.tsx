import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-tailwind/react";
import { getSourceMapRange } from "typescript";

const Home: React.FC = () => {
  const [feeds, setFeeds] = useState<Array<any>>([]);
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
  }, []);

  const goNewLink = (url: string) => {
    window.open(url);
  };

  return (
    <div className="mt-28">
      <div className="grid 2xl:grid-cols-5 grid-cols-1 gap-4 my-4 p-12">
        <div className="col-span-3 p-4 border-r-2 border-gray-500">
          {/* <img
            width="100%"
            src="https://frontofficesports.com/wp-content/uploads/2023/01/FOS-PM-23-1.10-NFL-Sponsor-Revenue-1024x683.jpg"
            alt="No Img"
          /> */}
          <img
            onClick={() => goNewLink(data.link)}
            className="cursor-pointer"
            width="100%"
            src={feeds[0]?.enclosure.link}
            alt="No Img"
          />
        </div>
        <div className="col-span-2">
          {feeds.slice(1, 4).map((val, key) => {
            return (
              <Card key={key} className="mb-8 p-4 static">
                <div className="sm:flex text-center sm:text-left p-4">
                  <img
                    className="w-52 h-full"
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
      <div className="bg-black px-4 py-8">
        <p className="text-white text-3xl text-bold">Featured</p>
        <div className="flex flex-wrap gap-4 border-t-2 border-white py-4">
          <img
            src="https://frontofficesports.com/wp-content/uploads/2022/12/FOS-22-12.27-Tom-Brady-Earnings-300x200.jpg"
            alt=""
          />
          <img
            src="https://frontofficesports.com/wp-content/uploads/2022/12/FOS-22-12.27-Tom-Brady-Earnings-300x200.jpg"
            alt=""
          />
          <img
            src="https://frontofficesports.com/wp-content/uploads/2022/12/FOS-22-12.27-Tom-Brady-Earnings-300x200.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
