import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="h-screen w-full bg-gray-200 dark:bg-neutral-900 transition-all overflow-auto">
      <Header onKeyDown={props.onKeyDown} />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
