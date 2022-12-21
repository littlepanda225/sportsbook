import { useEffect, useState } from "react";
import axios from "axios";
import { Widgets } from "./Widget.js";
import { API_SERVER_URL, API_KEY } from "../../config.js";

const NBAPage: React.FC = () => {
  // const [perPage, setPerPage] = useState<number>(3);
  // const [totalCount, setTotalCount] = useState<number>(10);
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const [widgetIDs, setWidgetIDs] = useState<Array<string>>([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.quarter4.io/basketball/widget/embed/161b7887-e6c0-4445-ba31-658e37076e3f/v1.js";
    script.async = true;
    script.charset = "utf-8";
    window.document.body.appendChild(script);
    // const date = new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();
    const date = "2022-12-15"
    console.log(date);
    const widgets: any[] = [];
    axios
      .get(
        `${API_SERVER_URL}basketball/v2/events?page=1&count=30&startDate%5Bafter%5D=${date}&api_key=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data.data);
        res.data.data.map((value: any, key: number) => {
          widgets.push(value.attributes.uuid);
        });
        setWidgetIDs(widgets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mx-auto p-2 sm:mt-28 mt-14">
      {widgetIDs.map((value, key) => {
        return (
          <div className="my-8" key={key}>
            <blockquote
              className="q4-game"
              data-detail="true"
              data-color-background="01005F"
              data-color-text="FFFFFF"
              data-color-high="FFFFFF"
              data-color-medium="FFFFFF"
              data-color-low="FFFFFF"
              data-sport="basketball"
              data-q4={value}
              // data-q4="0e7c17db-57bf-4f29-87af-f91becccfb4d"
            ></blockquote>
          </div>
        );
      })}
      {/* Pagination Start */}
      {/* <div className="flex flex-col items-center my-12">
        <div className="flex text-gray-700">
          <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-chevron-left w-6 h-6"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className="flex h-12 font-medium rounded-full bg-gray-200">
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              1
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">
              2
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              3
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              ...
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              13
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              14
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              15
            </div>
            <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">
              2
            </div>
          </div>
          <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-chevron-right w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div> */}
      {/* Pagination End */}
    </div>
  );
};

export default NBAPage;
