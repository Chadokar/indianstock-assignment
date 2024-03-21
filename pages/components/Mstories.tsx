import React from "react";
import { mconst } from "../const";

const Mstories = ({
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
      className={`bg-white w-1/4 max-[812px]:w-full ${
        type === "fourm" && "max-[812px]:hidden"
      }`}
    >
      <h2 className="text-xl px-2 max-[812px]:hidden flex text-center pb-1 pt-0.5 font-semibold uppercase bg-neutral-200 w-fit">
        market stories
      </h2>
      <div className="w-full flex flex-col gap-6 mt-4">
        {mconst.map((item, index) => (
          <div
            key={index}
            className="w-full shadow-[1px_-1px_1px_0px_rgba(0,0,0,0.3)]"
          >
            <img src={item.img} alt="" className="w-full h-40" />
            <div className="box-border w-full p-3 flex gap-2 flex-col">
              <h4 className="font-semibold text-base">{item.title}</h4>
              <p className="line-clamp-5 text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mstories;
