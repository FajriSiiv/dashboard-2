import React, { useReducer } from "react";
import { reducerMode, toggleDark } from "./reducer";

const Navbar = ({ number }) => {
  const [state, dispatch] = useReducer(reducerMode, toggleDark);

  let follower = number[0] + number[1] + number[2] + number[3];

  const toggleClick = () => {
    if (state.darkModes === false) {
      dispatch({ type: "darkmode" });
    } else if (state.darkModes === true) {
      dispatch({ type: "lightmode" });
    }
  };

  return (
    <div
      className={`bg-darkM-bgTop px-3 pt-4 h-[220px] flex flex-col md:flex-row md:items-start md:justify-between md:pt-9 lg:px-20  ${
        state.darkModes && "dark dark:bg-darkMode-bgTop"
      }`}
    >
      <div className="">
        <h1 className="font-bold text-2xl mb-2">Sosial Media Dashboard</h1>
        <span className="font-semibold text-sm">
          Total Followers: {follower}
        </span>
      </div>
      <hr className="border-[0,6px] border-textBg my-5 md:hidden" />
      <div className="tgl-dark flex justify-between items-center md:w-[150px]">
        <span className=" font-bold text-sm md:text-[14px]">Toggle</span>
        <div
          className={`w-[38px] h-[20px] bg-slate-400 rounded-full flex items-center px-[2px] relative md:w-[50px] md:h-[25px]`}
          onClick={toggleClick}
        >
          <div
            className={`h-4 w-4 rounded-full bg-bgWhite ring-opacity-80 absolute md:h-[22px] md:w-[22px]  ${
              state.darkModes === false
                ? "translate-x-[110%]"
                : "translate-x-[0%]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
