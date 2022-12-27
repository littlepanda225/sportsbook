import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { API_SERVER_URL, API_KEY, NFL_UUID } from "../../config.js";
import { FirstAngle, LastAngle } from "../../components/Icons";

const NFLPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [widgetIDs, setWidgetIDs] = useState<Array<string>>([]);

  const getWidgetByPage = (page: number) => {
    setLoading(true);
    // const date = new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();
    const date = "2022-12-25";
    const widgets: any[] = [];
    axios
      .get(
        `${API_SERVER_URL}american-football/v2/events?page=${page}&count=${perPage}&startDate%5Bafter%5D=${date}&order%5BstartDate%5D=asc&league.uuid=${NFL_UUID}&api_key=${API_KEY}`
      )
      .then((res) => {
        console.log(res);
        setTotalPage(Math.ceil(res.data.meta.totalItems / perPage));
        setTotalCount(res.data.meta.totalItems);
        res.data.data.map((value: any, key: number) => {
          widgets.push(value.attributes.uuid);
        });
        setWidgetIDs(widgets);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.quarter4.io/american-football/widget/embed/161b7887-e6c0-4445-ba31-658e37076e3f/v1.js";
    script.async = true;
    script.id = "quarter4Script";
    script.charset = "utf-8";
    window.document.body.appendChild(script);

    if (id) {
      setCurrentPage(parseInt(id));
      getWidgetByPage(parseInt(id));
    }
  }, []);

  const onNext = () => {
    if (currentPage + 1 > totalPage) {
      return;
    }
    window.location.href = `/nba/${currentPage + 1}`;
    setCurrentPage(currentPage + 1);
    getWidgetByPage(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage - 1 === 0) {
      return;
    }
    window.location.href = `/nba/${currentPage - 1}`;
    setCurrentPage(currentPage - 1);
    getWidgetByPage(currentPage - 1);
  };

  const onPageNumber = (page: number) => {
    window.location.href = `/nba/${page}`;
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-2 sm:mt-28 mt-14">
      {loading ? (
        <div className="h-screen bg-white">
          <div className="flex justify-center items-center h-full">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt=""
            />
          </div>
        </div>
      ) : (
        widgetIDs.map((value, key) => {
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
              ></blockquote>
            </div>
          );
        })
      )}
      <blockquote
        className="q4-game"
        data-detail="true"
        data-color-background="01005F"
        data-color-text="FFFFFF"
        data-color-high="FFFFFF"
        data-color-medium="FFFFFF"
        data-color-low="FFFFFF"
        data-sport="american-football"
        data-q4="6ec3f0aa-c85c-458e-bee1-d97204f644e1"
      >
        <span>
          The San Francisco 49ers have a forecast 51% chance to win against The
          Seattle Seahawks with a spread of -0.5/0.5 and an over/under of 40.5.
          The San Francisco 49ers are 1 - 0 against The Seattle Seahawks in the
          2022-23 Season.
        </span>
        &mdash;{" "}
        <em>Thursday, December 15th San Francisco 49ers @ Seattle Seahawks</em>
      </blockquote>
      <script src="https://api.quarter4.io/american-football/widget/embed/161b7887-e6c0-4445-ba31-658e37076e3f/v1.js"></script>

      {/* Pagination Start */}
      <div className="flex flex-col items-center my-12">
        <div className="flex text-gray-700">
          <div
            className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
            onClick={() => onPageNumber(1)}
          >
            <FirstAngle width={15} height={15} />
          </div>
          <div
            className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
            onClick={() => onPrevious()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left w-6 h-6"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div
            className="flex h-12 font-medium rounded-full bg-gray-200"
            onClick={() => onPageNumber(currentPage - 1)}
          >
            {currentPage - 1 >= 1 ? (
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full">
                {currentPage - 1}
              </div>
            ) : (
              ""
            )}
            <div
              className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white"
              onClick={() => onPageNumber(currentPage)}
            >
              {currentPage}
            </div>
            {currentPage + 1 <= Math.ceil(totalCount / perPage) ? (
              <div
                className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full"
                onClick={() => onPageNumber(currentPage + 1)}
              >
                {currentPage + 1}
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
            onClick={() => onNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div
            className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
            onClick={() => onPageNumber(totalPage)}
          >
            <LastAngle width={15} height={15} />
          </div>
        </div>
      </div>
      {/* Pagination End */}
    </div>
  );
};

export default NFLPage;
