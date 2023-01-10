import React from "react";

const Home: React.FC = () => {
  return (
    <div
      className="text-center p-12 mt-32"
      style={{ height: "800px" }}
    >
      <div className="grid grid-cols-4 gap-4">
        <div>1</div>
        <div className="col-span-2">2</div>
        <div>3</div>
      </div>
      <div>
        <h1>SPORTS</h1>
      </div>
    </div>
  );
};

export default Home;
