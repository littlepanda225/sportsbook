import { useEffect } from "react";
import { Widgets } from "./Widget.js";

const NBAPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.quarter4.io/american-football/widget/embed/161b7887-e6c0-4445-ba31-658e37076e3f/v1.js";
    script.async = true;
    script.charset = "utf-8";
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
    </div>
  );
};

export default NBAPage;
