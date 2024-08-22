import { useState } from "react";
import Switcher from "../../../globalcomponents/Switcher";
import { thumbImg } from "../../../resources/resources";

const VideosDisplay = () => {
  const [renderVid, setRenderVid] = useState(0);
  return (
    <>
      <div className="flex gap-x-2 w-full">
        <div className="w-full">
        <Switcher renderVid={renderVid} />  
        </div>
        <div className="flex flex-col gap-y-5">
          {thumbImg.map((el) => {
            return (
              <button 
                key={el.id}
                className="overflow-x-hidden overflow-y-hidden relative hover:scale-105 transition-all duration-200 ease-in w-full h-fit"
                onClick={() => setRenderVid(el.id)}
              >
                <div
                  className={`absolute top-0 bottom-0 left-0 right-0 bg-blend-multiply ${
                    renderVid == el.id ? "bg-none" : "bg-gray-800 opacity-40"
                  } testvid`}
                ></div>
                <img src={el.src} alt="" className={`testvid w-20 md:w-24 h-16 md:h-20 testvid shadow-xl border-2 border-tech-blue border-opacity-50`} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default VideosDisplay;