import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";
import { useDispatch } from "react-redux/es/exports";
import { reduxAction } from "../utils/redux/actions/action";
import { useEffect, useState, useMemo } from "react";
import { ThemeContext } from "../utils/context";

const App = (props) => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const tempLocal = localStorage.getItem("favorite");
    if (tempLocal) {
      dispatch(reduxAction("SET_FAVORITES", JSON.parse(tempLocal)));
    }
  });

  return (
    <ThemeContext.Provider value={background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:movie_id" element={<Detail />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/favorites/detail/:movie_id" element={<Detail />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
