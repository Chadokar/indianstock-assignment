import React from "react";
import { dconst } from "../const";

const Dform = ({
  ani,
  setAni,
  type,
}: {
  ani: boolean;
  setAni: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}) => {
  return (
    <div
      className={`w-2/3 bg-white max-[812px]:w-full ${
        type === "stories" && "max-[812px]:hidden"
      }`}
    >
      <h1 className="text-red-600 max-[812px]:hidden px-2 flex text-center pb-1 pt-0.5 font-semibold text-[28px] w-fit bg-neutral-200 uppercase">
        disscussion fourm
      </h1>
      <div className="w-full flex flex-col gap-7 p-2 pt-6 max-sm:text-sm ">
        {dconst.map((item, index) => (
          <div
            key={index}
            className="w-full shadow-[5px_5px_5px_0_rgba(0,0,0,0.3)] bg-white rounded-lg p-2 flex"
          >
            <img
              src={item.img}
              alt="img"
              className="w-8 h-8 rounded-3xl flex items-center justify-center m-2"
            />
            <div className="box-border px-3">
              <div className="h-8 flex gap-5">
                <h5 className="font-semibold max-sm:min-w-fit">{item.title}</h5>
                <button className="px-4 max-sm:min-w-fit max-sm:text-xs max-sm:max-h-7 max-sm:py-0 max-sm:leading-3 bg-blue-700 text-sm text-white leading-[0.875rem] rounded-xl">
                  Sector 2
                </button>
              </div>
              <p className="line-clamp-3">{item.description}</p>
              <ul className="flex w-full justify-between box-border">
                <li>icon1</li>
                <li>icon2</li>
                <li>icon3</li>
                <li>icon4</li>
              </ul>
            </div>
            <p className="text-blue-600 text-xs font-semibold min-w-fit max-sm:m-1  m-3">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dform;
