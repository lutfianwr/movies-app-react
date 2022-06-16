import React, { Component } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import "../styles/App.css";
import axios from "axios";
import { withRouter } from "../utils/Navigation";

export class Homepage extends Component {
  state = {
    data: [
      /*
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
      },*/
    ],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData2() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4f83f12e304c26029c17884a1c9eb41a&language=en-US&page=1",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4f83f12e304c26029c17884a1c9eb41a&language=en-US&page=1"
      )
      .then((res) => {
        const { results } = res.data;
        this.setState({ data: results });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <Layout>
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 shadow-2xl shadow-black">
          {this.state.data.map((item, index) => (
            <Card
              key={item.id}
              img={item.poster_path}
              title={item.title}
              onClickItem={() => this.props.navigate(`detail/${item.id}`)}
            />
            //poster_path
          ))}
        </div>
      </Layout>
    );
  }
}

export default withRouter(Homepage);
