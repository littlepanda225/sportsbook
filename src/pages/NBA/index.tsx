// import "https://api.quarter4.io/american-football/widget/embed/161b7887-e6c0-4445-ba31-658e37076e3f/v1.js";
import { useEffect } from "react";
import { Widgets } from "./Widget.js";

const NBAPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.quarter4.io/american-football/widget/embed/161b7887-e6c0-4445-ba31-658e37076e3f/v1.js";
    script.async = true;
    script.charset = "utf-8";
		script.crossOrigin = "anonyouse";
    window.document.body.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto p-2 sm:mt-28 mt-14">
      {Widgets.map((value, key) => {
        return (
          <div className="grid grid-cols-4 gap-4 my-8" key={key}>
            <div
              className="col-span-3"
              dangerouslySetInnerHTML={{ __html: value.content }}
            ></div>
            <div className="col-span-1">asdf</div>
          </div>
        );
      })}
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
    </div>
  );
};

export default NBAPage;
