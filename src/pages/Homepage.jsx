import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";
import "../styles/App.css";
import axios from "axios";
import { withRouter } from "../utils/Navigation";
import Button from "../components/Button";

const Homepage = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [page]);

  function fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4f83f12e304c26029c17884a1c9eb41a&language=en-US&page=1"
      )
      .then((res) => {
        const { results } = res.data;
        setData(results);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => ({ loading: false }));
  }

  function fetchData2() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const newPage = page + 1;
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=4f83f12e304c26029c17884a1c9eb41a&language=en-US&page=${page}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        const { results } = res;
        const temp = data.slice();
        temp.push(...results);
        setData(temp);
        setPage(newPage);
      })
      .catch((err) => alert(err.toString()));
    //.finally(() => ({ loading: false }));
  }

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-gray-200">
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.poster_path}
            title={item.title}
            onClickItem={() => navigate(`detail/${item.id}`)}
          />
        ))}
      </div>

      <Button onClick={() => fetchData2()}></Button>
    </Layout>
  );
};

export default withRouter(Homepage);
