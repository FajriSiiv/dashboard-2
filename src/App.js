import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { dataMedsos } from "./components/dataMedsos";
import Overview from "./components/Overview";

function App() {
  const ang = dataMedsos.map((e) => {
    let a = parseInt(e.follower);
    return a;
  });
  return (
    <div className="bg-darkM-bgTop text-darkM-textWhite">
      <Navbar number={ang} />

      <div className="mt-[-50px] sm:grid sm:grid-cols-2 md:mt-[-80px] lg:grid-cols-4 lg:gap-x-4 lg:px-20">
        {dataMedsos.map((e) => {
          return (
            <Card
              key={e.id}
              sosmed={e.medsos}
              name={e.name}
              follower={e.follower}
              up={e.today}
              icon={e.iconSvg}
            />
          );
        })}
      </div>
      <Overview />
    </div>
  );
}

export default App;
