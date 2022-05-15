import React from "react";
import { useData } from "../../context/DataContext";
import Layout from "../Layout/Layout";
import Image from "next/image";

import Sun from "../../../public/sun.svg";
import Moon from "../../../public/moon.svg";
import Brand from "../../../public/Brand.svg";

const SunIcon: React.FC<{}> = () => {
  const { dispatch } = useData();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-sun cursor-pointer"
      onClick={() =>
        dispatch({ type: "MODE_CHANGE", payload: { mode: "sun" } })
      }
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
};

const MoonIcon: React.FC<{}> = () => {
  const { dispatch } = useData();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-moon cursor-pointer"
      onClick={() =>
        dispatch({ type: "MODE_CHANGE", payload: { mode: "moon" } })
      }
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
};

const Header: React.FC<{}> = () => {
  const { data, dispatch } = useData();
  return (
    <Layout>
      <header className="w-full flex justify-between items-center">
        <h1 className="font-bold font-sans italic text-6xl py-2">ms</h1>
        {data.mode === "moon" ? <SunIcon /> : <MoonIcon />}
      </header>
    </Layout>
  );
};

export default Header;
