import React from "react";

const Drawer = ({
  ani,
  setAni,
}: {
  ani: boolean;
  setAni: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`w-1/4 fixed max-[812px]:w-4/5 h-screen transition-all duration-500 box-border bg-[#203c64] text-white  top-0 left-0 z-10 ${
        ani ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={() => setAni(!ani)}
        className={`absolute h-20 w-7 bg-blue-600 text-white flex items-center text-center justify-center pb-px box-border top-[50%] -translate-y-1/2 left-full`}
      >
        {">"}
      </button>
      <div className="py-6 px-12 border-b-[1px]">
        <h1 className="font-medium text-lg">Hello, User</h1>
      </div>
      <ul className="flex flex-col gap-2 pt-3">
        <li className="px-12 py-2 font-medium text-lg cursor-pointer">
          Market Stories
        </li>
        <li className="px-12 py-2 font-medium text-lg cursor-pointer">
          Sentiment
        </li>
        <li className="px-12 py-2 font-medium text-lg cursor-pointer">
          Market
        </li>
        <li className="px-12 py-2 font-medium text-lg cursor-pointer">
          Sector
        </li>
        <li className="px-12 py-2 font-medium text-lg cursor-pointer">Event</li>
      </ul>
    </div>
  );
};

export default Drawer;
