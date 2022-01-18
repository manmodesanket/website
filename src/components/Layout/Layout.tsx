import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="md:w-3/4 lg:w-1/2 p-2 mx-auto">{children}</div>;
};

export default Layout;
