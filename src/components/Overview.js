import React from "react";
import { dataPageViews as data } from "./dataMedsos";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className="pt-5 pb-10">
      <h2 className="pb-5 px-[20px] text-2xl font-bold lg:px-20">
        Overview - Today
      </h2>
      <div className="grid grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 justify-center sm:justify-items-center lg:px-20 lg:gap-x-3">
        {data.map((e) => (
          <OverviewCard
            key={e.id}
            icon={e.icon}
            like={e.likes}
            view={e.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
