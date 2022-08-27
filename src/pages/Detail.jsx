import React, { useState, useEffect } from "react";
import { withRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import axios from "axios";

const Detail = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { movie_id } = props.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((err) => {
        alert(err).toString();
      })
      .finally(() => ({ loading: false }));
  }

  return (
    <Layout>
      <div
        className="p-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      >
        <div className="flex justify-center">
          <div className="md:flex flex-row max-w-5xl bg-white dark:bg-gradient-to-b from-black to-neutral-500 via-neutral-800 dark:text-neutral-200 shadow-lg bg-opacity-80">
            <img
              className="p-5"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt=""
            />
            <div className="p-6 flex flex-col">
              <div className=" text-gray-900 dark:text-neutral-200 text-3xl font-medium mb-2">
                <div className="font-extrabold">{data.title}</div>
              </div>
              <div className="my-3 font-bold">
                Release Date
                <p className="font-normal"> {data.release_date}</p>
              </div>
              <div className="my-3 font-bold">
                Duration <p className="font-normal">{data.runtime} minutes</p>
              </div>

              <div className="my-3 font-bold">
                Description
                <div className="font-normal">{data.overview}</div>
              </div>
              <div>
                <p className="font-bold">Rating</p>
                <p className="text-3xl font-extrabold">{data.vote_average}</p>
                <p className="font-normal text-sm ">
                  average of {data.vote_count} votes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Detail);
