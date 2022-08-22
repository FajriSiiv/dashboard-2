import React from "react";
import iconUp from "../images/icon-up.svg";
import iconDown from "../images/icon-down.svg";

const OverviewCard = ({ icon, like, view }) => {
  return (
    <div className="flex flex-col sm:items-center lg:flex-row w-full gap-x-3">
      <div className="w-[280px] bg-darkM-cardBg mb-5 flex justify-between px-4 py-3 rounded-md lg:w-[50%]">
        <div className="flex flex-col justify-between">
          <h3 className="text-xs pt-2 font-semibold text-darkM-textWhite">
            Views
          </h3>
          <h4 className="text-3xl font-bold pt-5">
            {view.views > 10000
              ? Math.floor(view.views / 1000) + "K"
              : view.views}
          </h4>
        </div>
        <div className="flex flex-col justify-between items-end">
          <img src={icon} className="w-4 h-4 mt-2 object-contain" alt="icon" />
          <h4
            className={`flex text-[11px]  font-bold items-center ${
              view.inslight ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {" "}
            <img
              className="mr-[1px] object-contain w-2 h-2"
              src={view.inslight ? iconUp : iconDown}
              alt="icon"
            />{" "}
            {view.percent}%
          </h4>
        </div>
      </div>
      <div className="w-[280px] bg-darkM-cardBg mb-5 flex justify-between px-4 py-3 rounded-md lg:w-[50%]">
        <div className="flex flex-col justify-between">
          <h3 className="text-xs pt-2 font-semibold text-darkM-textWhite">
            Likes
          </h3>
          <h4 className="text-3xl font-bold pt-5">
            {like.like > 10000 ? Math.floor(like.like / 1000) + "K" : like.like}
          </h4>
        </div>
        <div className="flex flex-col justify-between items-end">
          <img src={icon} className="w-4 h-4 mt-2 object-contain" alt="icon" />
          <h4
            className={`flex text-[11px]  font-bold items-center ${
              like.inslight ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {" "}
            <img
              className="mr-[3px] object-contain w-2 h-2"
              src={like.inslight ? iconUp : iconDown}
              alt="icon"
            />{" "}
            {like.percent}%
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
