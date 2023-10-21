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
        <div className="flex text-xl mt-4">
          <div>
            <Link href="/" passHref>
              <div className="font-bold underline">About</div>
            </Link>
          </div>
          <div className="ml-4">
            <Link href="/posts" passHref>
              <div className="font-bold underline">Posts</div>
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Header;
