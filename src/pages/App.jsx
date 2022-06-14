import React, { Component } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import "../styles/App.css";

export class App extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "The Bad Guys",
        img: "https://lk21.live/wp-content/uploads/2022/05/The-Bad-Guys-2022-170x255.jpg",
      },
      {
        id: 2,
        title: "Turning Red",
        img: "https://lk21.live/wp-content/uploads/2022/03/Turning-Red-2022-170x255.jpg",
      },
      {
        id: 3,
        title: "Encanto",
        img: "https://lk21.live/wp-content/uploads/2022/03/Encanto-2021-170x255.jpg",
      },
      {
        id: 4,
        title: "Sing 2",
        img: "https://lk21.live/wp-content/uploads/2022/02/Sing-2-170x255.jpg",
      },
      {
        id: 5,
        title: "Dogtown 2",
        img: "https://lk21.live/wp-content/uploads/2022/02/Dogtown-2-2022-170x255.jpg",
      },
      {
        id: 6,
        title: "Birds Like Us",
        img: "https://lk21.live/wp-content/uploads/2022/02/Birds-Like-Us-2022-170x255.jpg",
      },
    ],
  };

  render() {
    return (
      <Layout>
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {this.state.data.map((item, index) => (
            <Card key={index} img={item.img} title={item.title} />
          ))}
        </div>
      </Layout>
    );
  }
}

export default App;
