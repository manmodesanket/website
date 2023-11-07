import React from "react";
import Layout from "../Layout/Layout";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Layout>
      <header className="w-full">
        <Link href="/" passHref>
          <h1 className="italic text-4xl py-2 text-black">Sanket</h1>
        </Link>
        <div className="flex text-xl mt-4 ">
          <div className="hover:bg-sky-200 underline decoration-sky-400 decoration-2">
            <Link className="text-sky-700 " href="/" passHref>
              <div className="font-bold">About</div>
            </Link>
          </div>
          <div className="ml-4 hover:bg-sky-200 underline decoration-sky-400 decoration-2">
            <Link className="text-sky-700" href="/posts" passHref>
              <div className="font-bold">Posts</div>
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Header;
