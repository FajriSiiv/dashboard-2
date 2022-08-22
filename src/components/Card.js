import React from "react";
import iconUp from "../images/icon-up.svg";
import iconDown from "../images/icon-down.svg";

const Card = ({ name, sosmed, follower, up, icon, id }) => {
  return (
    <div className="mb-[30px] row-span-1">
      <div
        className={`flex flex-col justify-around py-4 items-center bg-darkM-cardBg w-[280px] h-[200px] mx-auto rounded-lg border-t-4 border-t-${sosmed} lg:w-auto`}
      >
        <div className="icon flex items-center">
          <img src={icon} alt="facebook" className="object-contain w-4 h-4" />
          <p className="ml-1 text-xs font-semibold text-darkM-textWhite">
            {name}
          </p>
        </div>
        <div className="follow flex items-center flex-col justify-center my-3">
          <span className="text-5xl font-bold mb-1">
            {follower > 10000 ? Math.floor(follower / 1000) + "K" : follower}
          </span>
          <p className="text-slate-400  text-[10px] tracking-[5px] uppercase">
            {sosmed === "youtube" ? "subscribers" : "followers"}
          </p>
        </div>
        <div className="flex flex-row items-center ">
          <img
            src={up.inslight ? iconUp : iconDown}
            alt="icon"
            className="object-contain w-2 h-2 mr-1 lg:w-3 lg:h-3"
          />
          <p
            className={`lg:text-[15px] text-xs ${
              up.inslight ? "text-emerald-400" : "text-rose-400"
            } font-semibold`}
          >
            {up.follow} Today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
