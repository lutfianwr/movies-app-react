import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="h-screen w-full bg-gray-200 dark:bg-neutral-800 transition-all overflow-auto">
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
