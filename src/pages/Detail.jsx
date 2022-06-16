import React, { Component } from "react";
import { withRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import axios from "axios";

class Detail extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { movie_id } = this.props.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=4f83f12e304c26029c17884a1c9eb41a&language=en-US`
      )
      .then((res) => {
        const { data } = res;
        this.setState({ data: data });
      })
      .catch((err) => {
        alert(err).toString();
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { data } = this.state;
    return (
      <Layout>
        <div className="py-5 w-full bg-slate-100">
          <div className="flex justify-center">
            <div className="flex flex-row md:max-w-5xl rounded-lg bg-white shadow-lg">
              <img
                className="m-5 rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt=""
              />
              <div className="p-6 flex flex-col justify-start">
                <div className="text-gray-900 text-3xl font-medium mb-2">
                  <div className="font-bold">{data.title}</div>
                </div>
                <div className="my-3 font-bold">
                  Release Date
                  <p className="font-thin"> {data.release_date}</p>
                </div>
                <div className="my-3 font-bold">
                  Duration <p className="font-thin">{data.runtime} minutes</p>
                </div>

                <div className="my-3 font-bold">
                  Description
                  <div className="font-thin">{data.overview}</div>
                </div>
                <div>
                  <p className="font-bold">Rating</p>
                  <p className="text-2xl font-extrabold">{data.vote_average}</p>
                  <p className="font-thin text-sm ">
                    average of {data.vote_count} votes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Detail);
