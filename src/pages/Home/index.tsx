import React, { useEffect, useState} from "react";
import axios from "axios";

const Home: React.FC = () => {

  useEffect(() => {
    console.log("Home");
    axios
      .get(`https://www.espn.com/espn/rss/nba/news`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className="p-12 mt-20">
      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="col-span-2">
          <img
            width="100%"
            src="https://frontofficesports.com/wp-content/uploads/2023/01/FOS-PM-23-1.10-NFL-Sponsor-Revenue-1024x683.jpg"
            alt="No Img"
          />
        </div>
        <div>
          1
        </div>
      </div>
      <div className="bg-black px-4 py-8">
        <p className="text-white text-3xl text-bold">Featured</p>
        <div className="flex gap-4 border-t-2 border-white py-4">
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
