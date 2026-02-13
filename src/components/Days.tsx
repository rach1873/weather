import React from "react";

type DaysProps = {
  flip: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Days = ({ flip, handleClick }: DaysProps) => {
  return (
    <section
      className={`${flip} flex items-center justify-center max-md:hidden`}
    >
      <div className="space-y-2 flex flex-col">
        <button
          className="border-2 border-orange-400 rounded-xl p-2 cursor-pointer hover:bg-gray-500"
          id="3"
          onClick={handleClick}
        >
          3 Day Forecast
        </button>
        <button
          className="border-2 border-orange-400 rounded-xl p-2 cursor-pointer hover:bg-gray-500"
          id="5"
          onClick={handleClick}
        >
          5 Day Forecast
        </button>
        <button
          className="border-2 border-orange-400 rounded-xl p-2 cursor-pointer hover:bg-gray-500"
          id="7"
          onClick={handleClick}
        >
          7 Day Forecast
        </button>
        <button
          className="border-2 border-orange-400 rounded-xl p-2 cursor-pointer hover:bg-gray-500"
          id="10"
          onClick={handleClick}
        >
          10 Day Forecast
        </button>
      </div>
    </section>
  );
};

export default Days;
