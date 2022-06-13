import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Card />
      </>
    );
  }
}

export default Layout;
