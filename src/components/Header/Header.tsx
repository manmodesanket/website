import React from "react";
import { useData } from "../../context/DataContext";
import Layout from "../Layout/Layout";
import Image from "next/image";

import Sun from "../../../public/sun.svg";
import Moon from "../../../public/moon.svg";

const Header: React.FC<{}> = () => {
  const { data, dispatch } = useData();
  return (
    <Layout>
      <header className="w-full flex justify-between">
        <h1 className="font-bold text-3xl py-2">manmodesanket</h1>
        {data.mode === "moon" ? (
          <Image
            src={Sun}
            alt="sun"
            height={30}
            width={30}
            className="hover:cursor-pointer"
            onClick={() =>
              dispatch({ type: "MODE_CHANGE", payload: { mode: "sun" } })
            }
          />
        ) : (
          <Image
            src={Moon}
            alt="moon"
            height={30}
            width={30}
            className="hover:cursor-pointer "
            onClick={() =>
              dispatch({ type: "MODE_CHANGE", payload: { mode: "moon" } })
            }
          />
        )}
      </header>
    </Layout>
  );
};

export default Header;
