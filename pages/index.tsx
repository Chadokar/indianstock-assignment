import Dform from "./components/Dform";
import Drawer from "./components/Drawer";
import Mstories from "./components/Mstories";
import React from "react";

export default function Home() {
  const [ani, setAni] = React.useState(false);
  const [type, setType] = React.useState("fourm");

  return (
    <div>
      <div className="hidden max-[812px]:flex text-[22px] text-white max-sm:text-base bg-[#14253e]">
        <button
          className={` flex items-center flex-1 text-center justify-center py-2 font-semibold uppercase   ${
            type === "fourm" && "bg-[#203c64]"
          } uppercase`}
          onClick={() => setType("fourm")}
        >
          disscussion fourm
        </button>
        <button
          className={`flex items-center flex-1 text-center justify-center py-2 font-semibold uppercase  ${
            !(type === "fourm") && "bg-[#203c64]"
          }`}
          onClick={() => setType("stories")}
        >
          market stories
        </button>
      </div>
      <main className="w-full box-border flex justify-end overflow-x-hidden">
        <Drawer ani={ani} setAni={setAni} />

        <div
          className={`p-1 box-border px-10 max-sm:px-3 transition-all max-[812px]:w-full duration-500 flex justify-between gap-5 ${
            ani ? "w-3/4" : "w-full"
          }`}
        >
          <Dform ani={ani} setAni={setAni} type={type} />
          <Mstories ani={ani} setAni={setAni} type={type} />
        </div>
      </main>
    </div>
  );
}
